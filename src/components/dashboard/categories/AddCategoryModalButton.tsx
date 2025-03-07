import { useState } from "react";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import Modal from "../../shared/Modal";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { useAddCategory } from "../../../lib/react-query/categories";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import SessionService from "../../../utils/SessionService";
import { AxiosError } from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const addCategorySchema = z.object({
  name: z
    .string({ message: "ادخل اسم القسم" })
    .min(1, { message: "ادخل اسم القسم" }),
});

const AddCategoryButton = () => {
  const token = SessionService.getToken();
  const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false);
  const { mutateAsync: addCategory, isPending } = useAddCategory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof addCategorySchema>>({
    resolver: zodResolver(addCategorySchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof addCategorySchema>) => {
    try {
      if (!token) {
        toast.error("يجب تسجيل الدخول أولاً");
        return;
      }

      const response = await addCategory({
        name: data.name,
        token,
      });

      toast.success(response.message || "تم إضافة القسم بنجاح");
      setIsOpenAddModal(false);
      reset(); // Reset form after successful submission
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorResponse = error.response?.data;

        if (errorResponse?.errors?.name) {
          toast.error(errorResponse.errors.name[0]);
        } else if (errorResponse?.message) toast.error(errorResponse.message);
      } else toast.error("حدث خطأ أثناء إضافة القسم");
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpenAddModal(true)}
        className="bg-btn-primary text-white rounded-full"
      >
        <Link
          to={"/dashboard/admin/categories"}
          className="flex justify-center items-center w-full py-3 px-6"
        >
          اضافة قسم جديد
        </Link>
      </Button>

      {/* Add Modal */}
      <Modal
        isOpen={isOpenAddModal}
        closeModal={() => setIsOpenAddModal(false)}
        title="إضافة قسم جديد"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-9">
          <div className="relative w-full min-w-[200px] h-11">
            <Input
              type="text"
              {...register("name")}
              className={errors.name ? "border-red-500" : ""}
            />
            <Label>اسم القسم</Label>
            {errors.name && (
              <p className="text-red-500 text-sm my-2">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-y-3 gap-x-6">
            <Button
              type="submit"
              disabled={isPending}
              className="border border-btn-primary hover:bg-btn-primary-hover w-full rounded-xl text-blue hover:text-white py-3 flex justify-center items-center gap-3"
            >
              اضافة
              {isPending && (
                <AiOutlineLoading3Quarters
                  className="animate-spin text-blue"
                  size={20}
                />
              )}
            </Button>
            <Button
              type="button"
              onClick={() => {
                setIsOpenAddModal(false);
                reset();
              }}
              className="border border-danger hover:bg-danger-hover w-full rounded-xl text-danger hover:text-white py-3"
            >
              إلغاء
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddCategoryButton;

import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../shared/Modal";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { useUpdateCategory } from "../../../lib/react-query/categories";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SessionService from "../../../utils/SessionService";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface IProps {
  id: number;
  name: string;
}

const updateCategorySchema = z.object({
  name: z
    .string({ message: "ادخل اسم القسم" })
    .min(1, { message: "ادخل اسم القسم" }),
});

const EditCategoryButton = ({ id, name }: IProps) => {
  const token = SessionService.getToken();
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const { mutateAsync: updateCategory, isPending } = useUpdateCategory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof updateCategorySchema>>({
    resolver: zodResolver(updateCategorySchema),
    defaultValues: {
      name: name,
    },
  });

  const onSubmit = async (data: z.infer<typeof updateCategorySchema>) => {
    try {
      if (!token) return toast.error("يجب تسجيل الدخول أولاً");

      const response = await updateCategory({
        id: `${id}`,
        name: data.name,
        token,
      });

      toast.success(response.message || "تم تعديل القسم بنجاح");
      setIsOpenEditModal(false);
      reset(); // Reset form after successful submission
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorResponse = error.response?.data;

        if (errorResponse?.errors?.name) {
          toast.error(errorResponse.errors.name[0]);
        } else if (errorResponse?.message) toast.error(errorResponse.message);
      } else toast.error("حدث خطأ أثناء تعديل القسم");
    }
  };
  return (
    <>
      <Button
        onClick={() => setIsOpenEditModal(true)}
        className="bg-btn-primary hover:bg-btn-primary-hover w-full text-white rounded-full py-2"
      >
        تعديل
      </Button>

      {/* Edit Modal */}
      <Modal
        isOpen={isOpenEditModal}
        closeModal={() => setIsOpenEditModal(false)}
        title="تعديل اسم القسم"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative w-full min-w-[200px] h-11">
            <Input type="text" {...register("name")} />
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
              تعديل
              {isPending && (
                <AiOutlineLoading3Quarters
                  className="animate-spin text-blue"
                  size={20}
                />
              )}
            </Button>
            <Button
              onClick={() => setIsOpenEditModal(false)}
              className="border border-danger hover:bg-danger-hover w-full rounded-xl text-danger hover:text-white py-3"
            >
              إلغاء
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EditCategoryButton;

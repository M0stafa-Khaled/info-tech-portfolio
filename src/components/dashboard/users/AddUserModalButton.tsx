import { useState } from "react";
import Modal from "../../shared/Modal";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import registerSchema from "../../../validations/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import SessionService from "../../../utils/SessionService";
import { REGISTER_INPUTS } from "../../../constant";
import { useRegisterUser } from "../../../lib/react-query/auth";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const AddUserModalButton = () => {
  const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false);
  const token = SessionService.getToken();
  const { mutateAsync: registerUser, isPending } = useRegisterUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = async (formData: z.infer<typeof registerSchema>) => {
    try {
      const { data, message } = await registerUser({ formData, token: token! });
      if (!data) return toast.error(message);
      toast.success(message);
      reset();
      setIsOpenAddModal(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorResponse = error.response?.data;
        if (typeof errorResponse === "object" && errorResponse !== null) {
          if ("errors" in errorResponse) {
            const errors = errorResponse.errors;
            Object.keys(errors).forEach((key) => {
              if (Array.isArray(errors[key])) {
                errors[key].forEach((errorMsg: string) => {
                  toast.error(errorMsg);
                });
              }
            });
          }
        }
      } else {
        toast.error("حدث خطأ أثناء إضافة المستخدم ");
      }
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpenAddModal(true)}
        className="my-4 text-sm border-2 border-transparent bg-btn-primary text-white hover:border-btn-primary hover:bg-transparent hover:text-btn-primary rounded-full flex justify-center items-center w-full md:w-fit py-3 px-4"
      >
        إضافة مستخدم جديد
      </Button>

      {/* Add Modal */}
      <Modal
        isOpen={isOpenAddModal}
        closeModal={() => setIsOpenAddModal(false)}
        title="إضافة مستخدم جديد"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-9">
          <div className="flex flex-col gap-6">
            {REGISTER_INPUTS.map((input) => (
              <div
                key={input.name}
                className="relative w-full min-w-[200px] h-11"
              >
                <Input
                  type={input.type}
                  {...register(
                    input.name as keyof z.infer<typeof registerSchema>
                  )}
                />
                <Label>{input.label}</Label>
                {errors[input.name as keyof typeof errors]?.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors[input.name as keyof typeof errors]?.message}
                  </p>
                )}
              </div>
            ))}
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

export default AddUserModalButton;

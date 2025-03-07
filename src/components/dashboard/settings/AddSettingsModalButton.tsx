import { useState } from "react";
import Modal from "../../shared/Modal";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import SessionService from "../../../utils/SessionService";
import { SETTINGS_INPUTS } from "../../../constant";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useAddSettings } from "../../../lib/react-query/settings";
import settingsSchema from "../../../validations/settingsSchema";

const AddSettingsButton = () => {
  const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false);
  const token = SessionService.getToken();
  const { mutateAsync: addSettings, isPending } = useAddSettings();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof settingsSchema>>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      youtube: "",
      address: "",
      facebook: "",
      instagram: "",
      logo: "",
      tiktok: "",
      twitter: "",
    },
  });

  const onSubmit = async (formData: z.infer<typeof settingsSchema>) => {
    try {
      const { id } = await addSettings({ dataForm: formData, token: token! });
      if (!id) return toast.error("فشل إضافة الإعدادات");
      toast.success("تم إضافة الإعدادات بنجاح");
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
          if ("error" in errorResponse) {
            toast.error(errorResponse.error);
          }
        }
      } else {
        toast.error("حدث خطأ أثناء إضافة الإعدادات ");
      }
    }
  };
  const handleCloseModal = () => {
    setIsOpenAddModal(false);
    reset();
  };
  return (
    <>
      <Button
        onClick={() => setIsOpenAddModal(true)}
        className="text-sm border-2 border-transparent bg-btn-primary text-white hover:border-btn-primary hover:bg-transparent hover:text-btn-primary rounded-full flex justify-center items-center w-full md:w-fit py-3 px-4"
      >
        إضافة إعدادات
      </Button>

      {/* Add Modal */}
      <Modal
        isOpen={isOpenAddModal}
        closeModal={handleCloseModal}
        title="إضافة إعدادات"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col gap-4">
            {SETTINGS_INPUTS.map((input) => (
              <div
                key={input.name}
                className="relative w-full min-w-[200px] h-11"
              >
                <Input
                  type={input.type}
                  {...register(
                    input.name as keyof z.infer<typeof settingsSchema>
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
              onClick={handleCloseModal}
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

export default AddSettingsButton;

import { useState } from "react";
import Modal from "../../shared/Modal";
import Button from "../../ui/Button";
import SessionService from "../../../utils/SessionService";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { useAddEmployee } from "../../../lib/react-query/employees";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useGetAllUsers } from "../../../lib/react-query/users";
import addEmployeeSchema from "../../../validations/addEmployeeSchema";
import { ADD_EMPLOYEE_INPUTS } from "../../../constant";
import SelectMenu from "../../ui/SelectMenu";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const AddEmployeeButton = () => {
  const [selected, setSelected] = useState<string>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const token = SessionService.getToken();
  const [image, setImage] = useState<File>();

  const { data: users } = useGetAllUsers(token!);
  const { mutateAsync: addEmployee, isPending } = useAddEmployee();
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof addEmployeeSchema>>({
    resolver: zodResolver(addEmployeeSchema),
    defaultValues: {
      user_id: "",
      specialization: "",
    },
  });
  const onSubmit = async (dataForm: z.infer<typeof addEmployeeSchema>) => {
    if (!image) return toast.error("يجب اختيار صورة");
    try {
      const { message, success } = await addEmployee({
        dataForm: { ...dataForm, image: image },
        token: token!,
      });
      if (!success) return toast.error(message);
      toast.success(message);
      setIsOpen(false);
      reset();
      setImage(undefined);
      setSelected(undefined);
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
          } else {
            if (errorResponse?.message) toast.error(errorResponse.message);
          }
        } else {
          toast.error("حدث خطأ أثناء تعديل الموظف");
        }
      }
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="mt-6 border-2 border-transparent bg-btn-primary text-white hover:border-btn-primary hover:bg-transparent hover:text-btn-primary rounded-full py-3 px-6"
      >
        إضافة موظف جديد
      </Button>

      {/* Add Modal */}
      <Modal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        title="إضافة موظف جديد"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="mx-auto flex items-center border-2 border-dashed border-muted rounded-full overflow-hidden w-36 h-36">
            <div className="flex-1">
              <input
                type="file"
                onChange={(e) => setImage(e.target.files![0])}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer block text-gray-600 hover:text-blue-600 transition-colors w-full h-full"
              >
                <img
                  src={image ? URL.createObjectURL(image) : "/file-upload.svg"}
                  alt="upload image"
                  className=" w-36 h-36 object-fill text-blue-500"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {ADD_EMPLOYEE_INPUTS.map((input) =>
              input.name === "user_id" ? (
                <div key={input.name}>
                  <div className="flex items-center">
                    <span className="text-white w-40">المستخدم</span>
                    <SelectMenu
                      options={users || []}
                      label="المستخدم"
                      selected={selected as string}
                      setSelected={(value) => {
                        setSelected(value);
                        setValue("user_id", value);
                      }}
                    />
                  </div>
                  {errors.user_id?.message && (
                    <p className="text-danger text-xs my-1">
                      {errors.user_id?.message as string}
                    </p>
                  )}
                </div>
              ) : (
                <div
                  key={input.name}
                  className="relative w-full min-w-[200px] h-11"
                >
                  <Input
                    type={input.type}
                    {...register(
                      input.name as keyof z.infer<typeof addEmployeeSchema>
                    )}
                  />
                  <Label>{input.label}</Label>
                  {errors[input.name as keyof typeof errors]?.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[input.name as keyof typeof errors]?.message}
                    </p>
                  )}
                </div>
              )
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
                setIsOpen(false);
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

export default AddEmployeeButton;

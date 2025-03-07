import { useState } from "react";
import Modal from "../../shared/Modal";
import Button from "../../ui/Button";
import { useDeleteEmployee } from "../../../lib/react-query/employees";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import SessionService from "../../../utils/SessionService";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const DeleteEmployeeButton = ({ id }: { id: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const token = SessionService.getToken();
  const { mutateAsync: deleteEmployee, isPending } = useDeleteEmployee();

  const deleteEmployeeHandler = async () => {
    try {
      const { message, success } = await deleteEmployee({
        id: `${id}`,
        token: token!,
      });
      if (!success) return toast.error(message);
      toast.success(message);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorResponse = error.response?.data;
        if (errorResponse?.message) toast.error(errorResponse.message);
      } else {
        toast.error("حدث خطأ أثناء حذف الموظف");
      }
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-danger hover:bg-danger-hover w-full rounded-full py-3 text-white"
      >
        حذف
      </Button>

      <Modal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        title="حذف موظف"
        description="هل انت متاكد من حذف الموظف؟"
      >
        <div className="flex flex-col sm:flex-row gap-y-3 gap-x-6">
          <Button
            onClick={deleteEmployeeHandler}
            className="border border-danger hover:bg-danger-hover w-full rounded-xl text-danger hover:text-white py-3 flex justify-center items-center gap-3"
          >
            حذف
            {isPending && (
              <AiOutlineLoading3Quarters
                className="animate-spin text-danger"
                size={20}
              />
            )}
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            className="border border-btn-primary hover:bg-btn-primary-hover w-full rounded-xl text-blue hover:text-white py-3"
          >
            إلغاء
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteEmployeeButton;

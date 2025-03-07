import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Modal from "../../shared/Modal";
import Button from "../../ui/Button";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDeleteProject } from "../../../lib/react-query/projects";
import SessionService from "../../../utils/SessionService";
import { AxiosError } from "axios";

const DeleteProjectButton = ({ id }: { id: number }) => {
  const token = SessionService.getToken();
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync: deleteProject, isPending } = useDeleteProject();

  const deleteProjectHandler = async () => {
    try {
      const { message } = await deleteProject({
        id: `${id}`,
        token: token!,
      });
      toast(message);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorResponse = error.response?.data;
        if (errorResponse?.message) toast.error(errorResponse.message);
      } else {
        toast.error("حدث خطأ أثناء حذف المشروع");
      }
    } finally {
      setIsOpen(false);
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

      {/* Delete project modal */}
      <Modal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        title="حذف المشروع"
        description="هل انت متاكد من حذف المشروع؟"
      >
        <div className="flex flex-col gap-y-3">
          <Button
            disabled={isPending}
            onClick={deleteProjectHandler}
            className="border border-danger hover:bg-danger-hover w-fll rounded-xl text-danger hover:text-white py-3 flex justify-center items-center gap-3"
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

export default DeleteProjectButton;

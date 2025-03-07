import { useState } from "react";
import Modal from "../../shared/Modal";
import Button from "../../ui/Button";
import { useDeleteCategory } from "../../../lib/react-query/categories";
import SessionService from "../../../utils/SessionService";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { AxiosError } from "axios";

const DeleteCategoryModalButton = ({ id }: { id: number }) => {
  const token = SessionService.getToken();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const { mutateAsync: deleteCategory, isPending: isLoadingDelete } =
    useDeleteCategory();

  const deleteCategoryHandler = async () => {
    try {
      const { message } = await deleteCategory({ id: `${id}`, token: token! });
      toast(message);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorResponse = error.response?.data;

        if (errorResponse?.errors?.name) {
          toast.error(errorResponse.errors.name[0]);
        } else if (errorResponse?.message) toast.error(errorResponse.message);
      } else toast.error("حدث خطأ أثناء حذف القسم");
    } finally {
      setIsOpenDeleteModal(false);
    }
  };
  return (
    <>
      <Button
        onClick={() => setIsOpenDeleteModal(true)}
        className="bg-danger hover:bg-danger-hover w-full text-white rounded-full py-2"
      >
        حذف
      </Button>

      {/* Delete Modal */}
      <Modal
        isOpen={isOpenDeleteModal}
        closeModal={() => setIsOpenDeleteModal(false)}
        title="حذف القسم"
        description="هل انت متاكد من حذف هذا القسم؟"
      >
        <div className="flex flex-col sm:flex-row gap-y-3 gap-x-6">
          <Button
            onClick={deleteCategoryHandler}
            disabled={isLoadingDelete}
            className="border border-danger hover:bg-danger-hover w-full rounded-xl text-danger hover:text-white py-3 flex justify-center items-center gap-3"
          >
            حذف
            {isLoadingDelete && (
              <AiOutlineLoading3Quarters
                className="animate-spin text-danger"
                size={20}
              />
            )}
          </Button>
          <Button
            onClick={() => setIsOpenDeleteModal(false)}
            className="border border-btn-primary hover:bg-btn-primary-hover w-full rounded-xl text-blue hover:text-white py-3"
          >
            إلغاء
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteCategoryModalButton;

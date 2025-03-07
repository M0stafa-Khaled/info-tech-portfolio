import Button from "../ui/Button";
import { toast } from "react-toastify";
import Modal from "../shared/Modal";
import { useState } from "react";
import SessionService from "../../utils/SessionService";

const LogoutButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const logoutFromDashboard = () => {
    SessionService.clearAll();
    window.location.reload();
    return toast.success("تم تسجيل الخروج");
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="border border-danger text-danger hover:border-danger hover:text-danger-hover rounded-lg w-full py-3"
      >
        تسجيل الخروج
      </Button>
      {/* Logout Modal */}
      <Modal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        title="تسجيل الخروج"
        description="هل انت متاكد من تسجيل الخروج؟"
      >
        <div className="flex flex-col gap-y-3">
          <Button
            onClick={logoutFromDashboard}
            className="border border-danger hover:bg-danger-hover w-fll rounded-xl text-danger hover:text-white py-4"
          >
            تسجيل الخروج
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            className="border border-btn-primary hover:bg-btn-primary-hover w-full rounded-xl text-blue hover:text-white py-4"
          >
            إلغاء
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default LogoutButton;

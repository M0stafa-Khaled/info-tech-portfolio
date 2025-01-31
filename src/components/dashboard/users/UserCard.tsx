import React, { useState } from "react";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import Modal from "../../shared/Modal";
interface UserProps {
  id:number;
  name: string;
  job: string;
  role: string;
  image: string;
}

const UserCard: React.FC<UserProps> = ({ id,name, job, role, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-dark text-white p-4 rounded-2xl shadow-md border border-dark-blue">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col items-start gap-y-2">
            <div className="w-20 h-20  rounded-full mb-4 p-1 m-auto">
              <img
                src={image}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted w-14 block">الاسم:</span>
              {name}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted w-14 block">الوظيفة:</span>
              {job}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted w-14 block">الدور:</span>
              {role}
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
            <Button className="bg-btn-primary hover:bg-btn-primary-hover w-full py-3 rounded-full text-white">
              <Link to={`/dashboard/admin/users/${id}`} className="py-3">
                تعديل
              </Link>
            </Button>
            <Button
              onClick={() => setIsOpen(true)}
              className="bg-danger hover:bg-danger-hover w-full rounded-full py-3 text-white"
            >
              حذف
            </Button>
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          title="حذف المستخدم"
          description="هل انت متاكد من حذف المستخدم؟"
        >
          <div className="flex flex-col gap-y-3">
            <Button className="border border-danger hover:bg-danger-hover w-fll rounded-xl text-danger hover:text-white py-4">
              حذف
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              className="border border-btn-primary hover:bg-btn-primary-hover w-full rounded-xl text-blue hover:text-white py-4"
            >
              إلغاء
            </Button>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default UserCard;

import React from "react";
interface UserProps {
  name: string;
  job: string;
  role: string;
  image:string;
  editUser: () => void;
  deleteUser: () => void;
}
const UserCard: React.FC<UserProps> = ({
  name,
  job,
  role,
  image,
  editUser,
  deleteUser,
}) => {
  return (
    <>
      <div className="bg-dark text-white p-4 rounded-lg shadow-md border border-dark-blue">
        <div className="flex flex-col items-start gap-y-2">
          <div className="w-20 h-20  rounded-full mb-4  p-1 m-auto">
            <img src={image} className=""/>
          </div>
          <h3><span className="me-5 text-xs text-gray-500">الاسم:</span>{name}</h3>
          <p className="text-sm"><span className="text-xs text-gray-500 me-3">الوظيفة:</span>{job}</p>
          <p className="text-sm"><span className="text-xs text-gray-500 me-8">الدور:</span>{role}</p>
        </div>
        <div className="mt-4 flex flex-col gap-4 md:flex-row">
          <button
            className="bg-danger hover:bg-danger-hover text-white py-1 px-4 rounded-full w-full text-base"
            onClick={deleteUser}
          >
            حذف
          </button>
          <button
            className=" bg-btn-primary hover:bg-btn-primary-hover text-white py-1 px-4 rounded-full w-full text-base"
            onClick={editUser}
          >
            تعديل
          </button>
        </div>
      </div>
    </>
  );
};
export default UserCard;

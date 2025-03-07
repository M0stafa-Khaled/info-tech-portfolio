import { IEmployee } from "../../../interfaces";
import DeleteEmployeeButton from "./DeleteEmployeeModalButton";
import UpdateEmployeeButton from "./UpdateEmployeeModalButton";

interface IProps {
  employee: IEmployee;
}

const EmployeeCard = ({ employee }: IProps) => {
  return (
    <>
      <div className="bg-dark text-white p-4 rounded-2xl shadow-md border border-dark-blue">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col items-start gap-y-2">
            <div className="w-20 h-20  rounded-full mb-4 p-1 m-auto">
              <img
                src={
                  employee.image
                    ? `${import.meta.env.VITE_API_URL}/employees/${
                        employee.image
                      }`
                    : "/user.webp"
                }
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="w-full flex items-center justify-center gap-1">
              <span className="text-sm text-muted block">الاسم:</span>
              {employee.user.name}
            </div>
            <div className="w-full flex items-center justify-center gap-1">
              <span className="text-sm text-muted block">التخصص:</span>
              {employee.specialization}
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
            <UpdateEmployeeButton employee={employee} />
            <DeleteEmployeeButton id={employee.id} />
          </div>
        </div>
      </div>
    </>
  );
};
export default EmployeeCard;

import EmployeeCard from "./EmployeeCard";
import { useGetAllEmployees } from "../../../lib/react-query/employees";
import StorageService from "../../../utils/SessionService";
import Loader from "../../Loader";

const EmployeesList = () => {
  const token = StorageService.getToken();
  const { data: employees, isLoading } = useGetAllEmployees(token!);

  if (isLoading) return <Loader />;

  return (
    <>
      {!employees?.data.length ? (
        <h2 className="text-white text-xl lg:text-2xl my-6">لا يوجد موظفين</h2>
      ) : (
        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {employees?.data?.map((emplyee) => (
            <EmployeeCard key={emplyee.id} employee={emplyee} />
          ))}
        </div>
      )}
    </>
  );
};
export default EmployeesList;

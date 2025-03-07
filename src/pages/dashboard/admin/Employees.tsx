import EmployeeList from "../../../components/dashboard/employees/EmployeesList";
import AddEmployeeButton from "../../../components/dashboard/employees/AddEmployeeModalButton";

const EmployeesAdminDashboard = () => {
  return (
    <div className="my-6">
      <h1 className="text-2xl font-medium text-white">الموظفين</h1>
      <AddEmployeeButton />
      <EmployeeList />
    </div>
  );
};

export default EmployeesAdminDashboard;

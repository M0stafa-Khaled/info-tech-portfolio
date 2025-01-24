import UsersList from "../../../components/dashboard/users/UsersList";

const UsersAdminDashboard = () => {
  return (
    <div className="my-9">
      <h1 className="text-3xl font-medium text-white">المستخدمين</h1>
      <UsersList />
    </div>
  );
};

export default UsersAdminDashboard;

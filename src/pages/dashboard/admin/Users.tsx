import UsersList from "../../../components/dashboard/users/UsersList";
import AddUserModalButton from "../../../components/dashboard/users/AddUserModalButton";

const Users = () => {
  return (
    <div className="my-6">
      <h1 className="text-2xl font-medium text-white">المستخدمين</h1>
      <AddUserModalButton />
      <UsersList />
    </div>
  );
};

export default Users;

import React from "react";
import UserCard from "./UserCard";
import userImage from '../../../assets/user.png'

const users = [
  { id: 1, name: " احمد عبسي", job: "رجل اعمال", role: "ادمن" ,image:userImage},
  { id: 2, name: " احمد عبسي", job: "رجل اعمال", role: "ادمن" ,image:userImage },
  { id: 3, name: " احمد عبسي", job: "رجل اعمال", role: "ادمن" ,image:userImage},
  { id: 4, name: " احمد عبسي", job: "رجل اعمال", role: "ادمن" ,image:userImage},
  { id: 5, name: " احمد عبسي", job: "رجل اعمال", role: "ادمن" ,image:userImage},
  { id: 6, name: " احمد عبسي", job: "رجل اعمال", role: "ادمن" ,image:userImage },
  { id: 7, name: " احمد عبسي", job: "رجل اعمال", role: "ادمن" ,image:userImage},
  { id: 8, name: " احمد عبسي", job: "رجل اعمال", role: "ادمن" ,image:userImage},
];
const UsersList: React.FC = () => {
  const handleEdit = (id: number) => {
    alert(`Edit user with id ${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Delete user with id ${id}`);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            job={user.job}
            role={user.role}
            image={user.image}
            editUser={() => handleEdit(user.id)}
            deleteUser={() => handleDelete(user.id)}
          />
        ))}
      </div>
    </>
  );
};
export default UsersList;

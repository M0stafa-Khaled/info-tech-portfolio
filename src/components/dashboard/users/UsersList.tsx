import React from "react";
import UserCard from "./UserCard";
import userImage from "../../../assets/user.png";

const users = [
  {
    id: 1,
    name: " احمد عبسي",
    job: "رجل اعمال",
    role: "ادمن",
    image: userImage,
  },
  {
    id: 2,
    name: " احمد عبسي",
    job: "رجل اعمال",
    role: "ادمن",
    image: userImage,
  },
  {
    id: 3,
    name: " احمد عبسي",
    job: "رجل اعمال",
    role: "ادمن",
    image: userImage,
  },
  {
    id: 4,
    name: " احمد عبسي",
    job: "رجل اعمال",
    role: "ادمن",
    image: userImage,
  },
  {
    id: 5,
    name: " احمد عبسي",
    job: "رجل اعمال",
    role: "ادمن",
    image: userImage,
  },
  {
    id: 6,
    name: " احمد عبسي",
    job: "رجل اعمال",
    role: "ادمن",
    image: userImage,
  },
  {
    id: 7,
    name: " احمد عبسي",
    job: "رجل اعمال",
    role: "ادمن",
    image: userImage,
  },
  {
    id: 8,
    name: " احمد عبسي",
    job: "رجل اعمال",
    role: "ادمن",
    image: userImage,
  },
];
const UsersList: React.FC = () => {
  return (
    <div className="mt-9 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          job={user.job}
          role={user.role}
          image={user.image}
        />
      ))}
    </div>
  );
};
export default UsersList;

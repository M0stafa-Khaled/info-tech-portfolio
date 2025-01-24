import React from "react";
import MessageCard from "./MessageCard";
import userImage from "../../../assets/user-msg-img.png"
const messages = [
  {
    id: 1,
    userName: "عبدالله محمد",
    userImage: userImage,
    message: "اريد موقع صفحة هبوط وبرمجة تطبيق مكون من 6 شاشات والمقابل يحدد في الميتينج عندما نتفق",
  },
  {
    id: 2,
    userName: "عبدالله محمد",
    userImage: userImage,
    message: "اريد موقع صفحة هبوط وبرمجة تطبيق مكون من 6 شاشات والمقابل يحدد في الميتينج عندما نتفق"
  },
  {
    id: 3,
    userName: "عبدالله محمد",
    userImage: userImage,
    message: "اريد موقع صفحة هبوط وبرمجة تطبيق مكون من 6 شاشات والمقابل يحدد في الميتينج عندما نتفق",
  },
];

const MessagesList: React.FC = () => {
  const handleAccept = (id: number) => {
    console.log(`Message with ID ${id} accepted`);
  };

  const handleReject = (id: number) => {
    console.log(`Message with ID ${id} rejected`);
  };

  const handleDelete = (id: number) => {
    console.log(`Message with ID ${id} deleted`);
  };

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-white text-3xl  mb-8">الرسائل</h1>
      {messages.map((message) => (
        <MessageCard
          key={message.id}
          userName={message.userName}
          userImage={message.userImage}
          message={message.message}
          acceptMessage={() => handleAccept(message.id)}
          rejectMessage={() => handleReject(message.id)}
          deleteMessage={() => handleDelete(message.id)}
        />
      ))}
    </div>
  );
};

export default MessagesList;

import React from "react";

interface MessageProps {
  userName: string;
  userImage: string;
  message: string;
  acceptMessage: () => void;
  rejectMessage: () => void;
  deleteMessage: () => void;
}

const MessageCard: React.FC<MessageProps> = ({
  userName,
  userImage,
  message,
  acceptMessage,
  rejectMessage,
  deleteMessage,
}) => {
  return (
    <div className="bg-white text-black p-4 rounded-2xl mb-4 flex flex-col gap-y-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img src={userImage} alt={userName} className="w-full h-full object-cover" />
        </div>
        <h2 className="text-lg">{userName}</h2>
      </div>
        <p className=" text-sm break-words whitespace-normal max-w-96">{message}</p>
      <div className="flex gap-4">
        <button
          onClick={acceptMessage}
          className="bg-btn-primary w-40 text-white py-1 px-4 rounded-lg hover:bg-btn-primary-hover text-base"
        >
          قبول
        </button>
        <button
          onClick={rejectMessage}
          className="bg-red-500 w-40 text-white py-1 px-4 rounded-lg text-base"
        >
          رفض
        </button>
        <button
          onClick={deleteMessage}
          className="bg-red-500 text-white w-40 py-1 px-4 rounded-lg text-base"
        >
          حذف
        </button>
      </div>
    </div>
  );
};

export default MessageCard;

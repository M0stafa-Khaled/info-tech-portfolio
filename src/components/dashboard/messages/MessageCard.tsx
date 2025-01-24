import React from "react";
import Button from "../../ui/Button";

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
    <div className="bg-dark p-4 rounded-2xl mb-4 flex flex-col gap-y-6 max-w-3xl border border-dark-blue">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={userImage}
            alt={userName}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-lg text-white">{userName}</h2>
      </div>
      <p className="text-white break-words leading-relaxed whitespace-normal">
        {message}
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button
          onClick={acceptMessage}
          className="bg-btn-primary text-white py-2 px-4 rounded-xl hover:bg-btn-primary-hover w-full sm:w-40"
        >
          قبول
        </Button>
        <Button
          onClick={rejectMessage}
          className="bg-danger hover:bg-danger-hover text-white py-2 px-4 rounded-xl w-full sm:w-40"
        >
          رفض
        </Button>
        <Button
          onClick={deleteMessage}
          className="bg-danger hover:bg-danger-hover text-white py-2 px-4 rounded-xl  w-full sm:w-40"
        >
          حذف
        </Button>
      </div>
    </div>
  );
};

export default MessageCard;

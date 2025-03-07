import { useGetAllMessages } from "../../../lib/react-query/messages";
import SessionService from "../../../utils/SessionService";
import Loader from "../../Loader";
import MessageCard from "./MessageCard";

const MessagesList = () => {
  const token = SessionService.getToken();
  const { data: messages, isLoading } = useGetAllMessages(token!);

  if (isLoading) return <Loader />;
  return (
    <div className="mt-9">
      {!messages?.messages.length ? (
        <p className="font-medium text-white text-lg">لا يوجد</p>
      ) : (
        messages?.messages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))
      )}
    </div>
  );
};

export default MessagesList;

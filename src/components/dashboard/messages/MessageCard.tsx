import { IMessage } from "../../../interfaces";
import formatDateTime from "../../../utils/formatDate";

interface IProps {
  message: IMessage;
}

const MessageCard = ({ message }: IProps) => {
  return (
    <div className="bg-dark p-4 rounded-2xl mb-4 flex flex-col gap-4 max-w-3xl border border-dark-blue">
      <div className="flex items-center gap-4">
        <h2 className="text-white">
          <span className="text-muted">الاسم: </span>
          {message.firstname} {message.lastname}
        </h2>
      </div>
      <div className="space-y-2">
        <p className="text-white">
          <span className="text-muted text-sm">العنوان: </span>
          {message.address}
        </p>
        <p className="text-white break-all">
          <span className="text-muted text-sm">البريد الالكتروني: </span>
          {message.email}
        </p>
        <p className="text-white">
          <span className="text-muted text-sm">رقم الهاتف: </span>
          {message.mobile}
        </p>
        <div className="space-y-1 !my-3">
          <h6 className="text-white">
            <span className="text-muted text-sm">عنوان الموضوع: </span>
            {message.title}
          </h6>
          <p className="text-white break-words leading-relaxed whitespace-normal">
            <span className="text-muted text-sm"> الرسالة: </span>
            {message.message}
          </p>
        </div>
        <p className="text-muted text-xs text-end px-4">
          {formatDateTime(message.created_at)}
        </p>
      </div>
    </div>
  );
};

export default MessageCard;

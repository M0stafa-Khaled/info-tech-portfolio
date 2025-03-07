import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
import { useGetAllUsers } from "../../../lib/react-query/users";
import SessionService from "../../../utils/SessionService";
import formatDateTime from "../../../utils/formatDate";
import Loader from "../../Loader";
const UsersList = () => {
  const token = SessionService.getToken();
  const { data: users, isLoading } = useGetAllUsers(token!);

  if (isLoading) return <Loader />;
  return (
    <Table dir="rtl">
      <TableHeader className="!bg-dark">
        <TableRow className="!bg-dark">
          <TableHead className="!bg-dark text-white text-center">
            <div className="max-w-[250px] text-center">الاسم</div>
          </TableHead>
          <TableHead className="!bg-dark text-white text-center">
            <div className="text-center">رقم الهاتف</div>
          </TableHead>
          <TableHead className="!bg-dark text-white text-center">
            <div className="text-center">البريد الالكتروني</div>
          </TableHead>
          <TableHead className="!bg-dark text-white !text-center">
            <div className="!text-center">وقت التسجيل</div>
          </TableHead>
          <TableHead className="!bg-dark text-white !text-center">
            <div className="!text-center">وقت التحقق</div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody dir="rtl">
        {users?.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="text-center">
              <div className="max-w-[250px] truncate">{user.name}</div>
            </TableCell>
            <TableCell className="text-center">{user.phone}</TableCell>
            <TableCell className="text-center normal-case">
              {user.email}
            </TableCell>
            <TableCell className="text-center">
              {formatDateTime(user.created_at)}
            </TableCell>
            <TableCell className="text-center">
              {user.email_verified_at
                ? formatDateTime(user.email_verified_at)
                : "لم يتم التحقق"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersList;

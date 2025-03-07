import { Link } from "react-router-dom";
import { useGetAllSettings } from "../../../lib/react-query/settings";
import SessionService from "../../../utils/SessionService";
import Loader from "../../Loader";

const SettingsList = () => {
  const token = SessionService.getToken();
  const { data, isLoading } = useGetAllSettings(token!);
  if (isLoading) return <Loader />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="flex text-white gap-2 bg-dark p-3 rounded-lg shadow-md">
        <h4 className="text-muted">اسم الموقع:</h4>
        <p> {data?.name || "لا يوجد"}</p>
      </div>
      <div className="flex text-white gap-2 bg-dark p-3 rounded-lg shadow-md">
        <h4 className="text-muted">البريد الإلكتروني: </h4>
        <p> {data?.email || "لا يوجد"}</p>
      </div>
      <div className="flex text-white gap-2 bg-dark p-3 rounded-lg shadow-md">
        <h4 className="text-muted">العنوان: </h4>
        <p> {data?.address || "لا يوجد"}</p>
      </div>
      <div className="flex text-white gap-2 bg-dark p-3 rounded-lg shadow-md">
        <h4 className="text-muted">رقم الهاتف:</h4>
        <p> {data?.phone || "لا يوجد"}</p>
      </div>
      <div className="flex text-white gap-2 bg-dark p-3 rounded-lg shadow-md">
        <h4 className="text-muted">حساب الفيسبوك:</h4>
        <Link to={data?.facebook || ""}>
          {data?.facebook ? "حساب الفيسبوك" : "لا يوجد"}
        </Link>
      </div>
      <div className="flex text-white gap-2 bg-dark p-3 rounded-lg shadow-md">
        <h4 className="text-muted">حساب الانستا:</h4>
        <Link to={data?.instagram || ""}>
          {data?.instagram ? "حساب الانستا" : "لا يوجد"}
        </Link>
      </div>
      <div className="flex text-white gap-2 bg-dark p-3 rounded-lg shadow-md">
        <h4 className="text-muted">حساب تويتر:</h4>
        <Link to={data?.twitter || ""}>
          {data?.twitter ? "حساب تويتر" : "لا يوجد"}
        </Link>
      </div>
      <div className="flex text-white gap-2 bg-dark p-3 rounded-lg shadow-md">
        <h4 className="text-muted">حساب تيك توك:</h4>
        <Link to={data?.tiktok || ""}>
          {data?.tiktok ? "حساب تيك توك " : "لا يوجد"}
        </Link>
      </div>
    </div>
  );
};
export default SettingsList;

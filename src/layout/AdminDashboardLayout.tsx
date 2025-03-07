import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import { DASHBOARD_NAV_LINKS } from "../constant";
import Navbar from "../components/dashboard/Navbar";
import { useDispatch, useSelector } from "react-redux";
import SessionService from "../utils/SessionService";
import { useGetAllSettings } from "../lib/react-query/settings";
import { addSettings } from "../app/features/settings/settingsSlice";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { RootState } from "../app/store";

const AdminDashboardLayout = () => {
  const dispatch = useDispatch();
  const token = SessionService.getToken();
  const { data, isSuccess } = useGetAllSettings(token!);
  const {
    settings: { name },
  } = useSelector((state: RootState) => state.settings);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(addSettings({ settings: data }));
    }
  }, [isSuccess, dispatch, data]);

  return (
    <div className="flex h-screen">
      <Helmet>
        <title>{name}</title>
      </Helmet>
      {/* Sidebar */}
      <Sidebar links={DASHBOARD_NAV_LINKS} />
      {/* Main Content */}
      <main className="flex flex-1 h-full overflow-hidden bg-background">
        <div className="container lg:px-16 h-full overflow-y-auto custom-scrollbar">
          <Navbar links={DASHBOARD_NAV_LINKS} />
          <div className="pt-[70px] lg:pt-0">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardLayout;

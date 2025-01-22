import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import DASHBOARD_NAV_LINKS from "../constant/dashboardNavLinks";
import Navbar from "../components/dashboard/Navbar";

const AdminDashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar links={DASHBOARD_NAV_LINKS} />
      {/* Main Content */}
      <main className="flex flex-1 h-full overflow-hidden bg-background">
        <div className="container h-full overflow-y-auto custom-scrollbar">
          <Navbar links={DASHBOARD_NAV_LINKS} />
          <div className="pt-[70px] lg:pt-10">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardLayout;

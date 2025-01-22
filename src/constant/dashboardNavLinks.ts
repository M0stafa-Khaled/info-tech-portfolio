import { INavLinkDashboard } from "../interfaces";

const DASHBOARD_NAV_LINKS: INavLinkDashboard[] = [
  {
    name: "الصفحة الرئيسية",
    path: "/dashboard/admin",
  },
  {
    name: "المستخدمين",
    path: "/dashboard/admin/users",
  },
  {
    name: "ادراة المشاريع",
    path: "/dashboard/admin/projects",
  },
  {
    name: "ادارة التواصل",
    path: "/dashboard/admin/contacts",
  },
  {
    name: "اعدادات الموقع",
    path: "/dashboard/admin/settings",
  },
  {
    name: "اعدادات الظهور",
    path: "/dashboard/admin/appearance",
  },
];

export default DASHBOARD_NAV_LINKS;

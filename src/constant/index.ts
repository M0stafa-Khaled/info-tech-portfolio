import {
  IAddProjectFormInput,
  ILoginFormInput,
  INavLinkDashboard,
} from "../interfaces";

export const DASHBOARD_NAV_LINKS: INavLinkDashboard[] = [
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

export const LOGIN_FORM_INPUTS: ILoginFormInput[] = [
  { label: "البريد الالكتروني", type: "email", name: "email" },
  { label: "كلمة المرور", type: "password", name: "password" },
];

export const ADD_PROJECT_FORM_INPUTS: IAddProjectFormInput[] = [
  {
    label: "اسم المشروع",
    name: "title",
    type: "text",
  },
  {
    label: "وصف المشروع",
    name: "description",
    type: "text",
  },
  {
    label: "الأدوات المستخدمة",
    name: "tools",
    type: "text",
  },
  {
    label: "رابط المشروع",
    name: "url",
    type: "text",
  },
];

export const CATEGORIES = [
  { value: "web", label: "ويب" },
  { value: "mobile", label: "موبايل" },
  { value: "desktop", label: "سطح المكتب" },
  { value: "ui&ux", label: "تصميم واجهات" },
];

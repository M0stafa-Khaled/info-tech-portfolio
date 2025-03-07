import { IFormInput, INavLinkDashboard, IService } from "../interfaces";

export const DASHBOARD_NAV_LINKS: INavLinkDashboard[] = [
  {
    name: "المستخدمين",
    path: "/dashboard/admin",
  },
  {
    name: "الموظفين",
    path: "/dashboard/admin/employees",
  },
  {
    name: "إدراة المشاريع",
    path: "/dashboard/admin/projects",
  },
  {
    name: "إدارة الأقسام",
    path: "/dashboard/admin/categories",
  },
  {
    name: "الرسائل",
    path: "/dashboard/admin/contacts",
  },
  {
    name: "الإعدادات",
    path: "/dashboard/admin/settings",
  },
];
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const LOGIN_FORM_INPUTS: IFormInput[] = [
  { label: "البريد الالكتروني", type: "text", name: "email" },
  { label: "كلمة المرور", type: "password", name: "password" },
];

export const REGISTER_INPUTS: IFormInput[] = [
  { name: "name", type: "text", label: "الاسم" },
  { name: "email", type: "text", label: "البريد الالكتروني" },
  { name: "phone", type: "text", label: "رقم الهاتف" },
  { name: "password", type: "password", label: "كلمة المرور" },
  { name: "confirm_password", type: "password", label: "تاكيد كلمة المرور" },
];

export const ADD_PROJECT_FORM_INPUTS: IFormInput[] = [
  {
    label: "اسم المشروع",
    name: "title",
    type: "text",
  },
  {
    label: "وصف المشروع",
    name: "descriptions",
    type: "text",
  },
  {
    label: "الأدوات المستخدمة",
    name: "tool",
    type: "text",
  },
  {
    label: "رابط المشروع",
    name: "url",
    type: "text",
  },
];

export const ADD_USER_FORM_INPUTS: IFormInput[] = [
  {
    label: "الاسم",
    name: "name",
    type: "text",
  },
  {
    label: "البريد الإلكترونى",
    name: "email",
    type: "text",
  },
  {
    label: "الدور",
    name: "role",
    type: "text",
  },
  {
    label: "الوظيفة",
    name: "job",
    type: "text",
  },
  {
    label: "كلمة المرور",
    name: "password",
    type: "password",
  },
];

export const ADD_EMPLOYEE_INPUTS: IFormInput[] = [
  { name: "user_id", type: "text", label: "المستخدم" },
  { name: "specialization", type: "text", label: "التخصص" },
];

export const MESSAGE_INPUTS: IFormInput[] = [
  {
    name: "firstname",
    type: "text",
    label: "الاسم الأول",
  },
  { name: "lastname", type: "text", label: "الاسم الأخير" },
  { name: "mobile", type: "text", label: "رقم الهاتف" },
  { name: "address", type: "text", label: "العنوان" },
  { name: "email", type: "text", label: "البريد الإلكترونى" },
  { name: "title", type: "text", label: "عنوان الرسالة" },
  { name: "message", type: "text", label: "الرسالة" },
];

export const SETTINGS_INPUTS: IFormInput[] = [
  {
    label: "اسم الموقع",
    name: "name",
    type: "text",
  },
  {
    label: "رقم الهاتف",
    name: "phone",
    type: "text",
  },
  {
    label: "البريد الإلكتروني",
    name: "email",
    type: "text",
  },
  {
    label: "العنوان",
    name: "address",
    type: "text",
  },
  {
    label: "حساب  الفيسبوك",
    name: "facebook",
    type: "text",
  },
  {
    label: "حساب الانستا",
    name: "instagram",
    type: "text",
  },
  {
    label: "حساب تويتر",
    name: "twitter",
    type: "text",
  },
  {
    label: "رابط الشعار",
    name: "logo",
    type: "text",
  },
];

export const SERVICES: IService[] = [
  {
    img: "/service-coding.webp",
    title: "تطوير المواقع",
    description:
      "نقدم حلولًا برمجية معقدة باستخدام أفضل الممارسات الهندسية لتلبية احتياجات عملك المتطورة.",
  },
  {
    img: "/service-hosting.webp",
    title: "الاستضافة",
    description:
      "خدمات استضافة آمنة وموثوقة مع أداء عالي وتوفر مستمر لمواقعك وتطبيقاتك الرقمية.",
  },
  {
    img: "/service-software-engineering.webp",
    title: "هندسة البرمجيات",
    description:
      "نقدم حلولًا برمجية معقدة باستخدام أفضل الممارسات الهندسية لتلبية احتياجات عملك المتطورة.",
  },
  {
    img: "/service-social-media.webp",
    title: "التسويق الرقمي",
    description:
      "استراتيجيات تسويق متكاملة تساعدك على الوصول إلى جمهورك المستهدف عبر منصات متعددة.",
  },
  {
    img: "/service-coloring.webp",
    title: "تصميم الهوية البصرية",
    description:
      "نبتكر تصميمات لهوية بصرية متميزة تعكس شخصية علامتك التجارية وتميزها في السوق.",
  },
];

export const PROJECTS_FILTER_OPTIONS = [
  { label: "كل المشاريع", value: "projects" },
  { label: "المشاريع المخفية فقط", value: "projects_hidden" },
  { label: "المشاريع المتاحة فقط", value: "projects_nothidden" },
];

import {
  IAddProjectFormInput,
  ILoginFormInput,
  INavLinkDashboard,
  IProject,
  IService,
  ITeamMember,
} from "../interfaces";
import projectImg from "../assets/project-img.png";
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import avatar from "../assets/about-avatar.png";
import designingImage from "../assets/service-designing.png";
import codingImage from "../assets/service-coding.png";
import hostingImage from "../assets/service-hosting.png";
import softwareImage from "../assets/service-software-engineering.png";
import socialImage from "../assets/service-social-media.png";
import responsiveImage from "../assets/service-responsive-design.png";
import coloringImage from "../assets/service-coloring.png";
import contentImage from "../assets/service-content-creation.png";

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
    name: "إدراة المشاريع",
    path: "/dashboard/admin/projects",
  },
  {
    name: "إدارة الأقسام",
    path: "/dashboard/admin/categories",
  },
  {
    name: "إدارة التواصل",
    path: "/dashboard/admin/contacts",
  },
  {
    name: "إعدادات الموقع",
    path: "/dashboard/admin/settings",
  },
];

export const LOGIN_FORM_INPUTS: ILoginFormInput[] = [
  { label: "البريد الالكتروني", type: "text", name: "email" },
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
  { value: "engineering", label: "هندسة البرمجيات" },
  { value: "frontend", label: "واجهة أمامية" },
];

export const PROJECTS: IProject[] = [
  {
    id: 1,
    title: "نظام الألواح الشمسية للكواكب",
    description:
      "مشروع متكامل لتصميم نظام إدارة وتتبع الألواح الشمسية باستخدام أحدث التقنيات والحلول البرمجية المبتكرة.",
    images: [projectImg],
    url: "",
    hidden: false,
    category: "واجهة أمامية",
    developers: [],
    rating: 5,
    technologies: [],
  },
  {
    id: 2,
    title: "تطبيق إدارة المشاريع الرقمية",
    description:
      "حل برمجي متطور لإدارة المشاريع الرقمية يوفر واجهة مستخدم سلسة وسهلة الاستخدام.",
    images: [projectImg],
    url: "",
    category: "تصميم واجهات",
    hidden: true,
    developers: [],
    rating: 5,
    technologies: [],
  },
  {
    id: 3,
    title: "منصة التعلم الإلكتروني",
    description:
      "منصة تعليمية ذكية تجمع بين أحدث تقنيات التعلم عن بعد وتصميم تفاعلي متميز.",
    images: [projectImg],
    url: "",
    category: "هندسة البرمجيات",
    hidden: true,
    developers: [],
    rating: 5,
    technologies: [],
  },
  {
    id: 4,
    title: "تطبيق الصحة الذكي",
    description:
      "تطبيق شامل لمتابعة الحالة الصحية وتقديم استشارات طبية عن بعد.",
    images: [projectImg],
    url: "",
    hidden: false,
    category: "واجهة أمامية",
    developers: [],
    rating: 5,
    technologies: [],
  },
  {
    id: 5,
    title: "متجر إلكتروني متكامل",
    description:
      "حل متكامل للتجارة الإلكترونية مع تصميم جذاب وتجربة مستخدم فريدة.",
    images: [projectImg],
    url: "",
    hidden: true,
    category: "تصميم واجهات",
    developers: [],
    rating: 5,
    technologies: [],
  },
  {
    id: 6,
    title: "نظام إدارة الموارد البشرية",
    description: "برنامج متطور لإدارة شؤون الموظفين وأتمتة العمليات التنظيمية.",
    images: [projectImg],
    url: "",
    hidden: false,
    category: " موبايل",
    developers: [],
    rating: 5,
    technologies: [],
  },
  {
    id: 7,
    title: "تطبيق النقل الذكي",
    description: "حل مبتكر لتتبع وإدارة وسائل النقل العامة بواجهة مستخدم سلسة.",
    images: [projectImg],
    url: "",
    hidden: false,
    category: "واجهة أمامية",
    developers: [],
    rating: 5,
    technologies: [],
  },
  {
    id: 8,
    title: "لوحة تحكم للتحليلات",
    description: "أداة متقدمة لتصور البيانات وتحليل المؤشرات بتصميم احترافي.",
    images: [projectImg],
    url: "",
    hidden: false,
    category: "هندسة البرمجيات",
    developers: [],
    rating: 5,
    technologies: [],
  },
  {
    id: 9,
    title: "تطبيق إدارة المهام",
    description:
      "أداة فعالة لتنظيم المهام والمشاريع مع واجهة مستخدم سهلة وبديهية.",
    images: [projectImg],
    url: "",
    hidden: true,
    category: "ويب",
    developers: [],
    rating: 5,
    technologies: [],
  },
  {
    id: 10,
    title: "منصة التواصل المؤسسي",
    description: "حل متكامل للتواصل الداخلي وإدارة فرق العمل بتقنيات متطورة.",
    images: [projectImg],
    url: "",
    hidden: true,
    category: "هندسة البرمجيات",
    developers: [],
    rating: 5,
    technologies: [],
  },
];

export const TEAM_MEMBERS: ITeamMember[] = [
  {
    name: "مصطفى خالد",
    job: "مطور واجهات أمامية",
    description:
      "مهندس برمجيات متخصص في تطوير واجهات المستخدم، يمتلك شغفًا عميقًا بتصميم تجارب رقمية مبتكرة وسلسة. يجمع بين المهارة التقنية والإبداع لخلق حلول تكنولوجية متميزة.",
    image: avatar,
    skills: ["React", "Next.js", "Javascript", "Nodejs", "Tailwindcss"],
    links: [
      {
        icon: <FiInstagram className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiFacebook className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiLinkedin className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FaWhatsapp className="text-white" size={20} />,
        link: "/",
      },
    ],
    cv: "",
  },
  {
    name: "أحمد محمد",
    job: "مطور خلفية",
    description:
      "مهندس برمجيات متخصص في تطوير الخوادم والأنظمة الخلفية، يتميز بقدرته على بناء حلول برمجية معقدة وقوية. يؤمن بأهمية الأداء والكفاءة في التطوير التقني.",
    image: avatar,
    skills: ["React", "Next.js", "Javascript", "Nodejs", "Tailwindcss"],
    links: [
      {
        icon: <FiInstagram className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiFacebook className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiLinkedin className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FaWhatsapp className="text-white" size={20} />,
        link: "/",
      },
    ],
    cv: "",
  },
  {
    name: "أحمد محمد",
    job: "مطور خلفية",
    description:
      "مهندس برمجيات متخصص في تطوير الخوادم والأنظمة الخلفية، يتميز بقدرته على بناء حلول برمجية معقدة وقوية. يؤمن بأهمية الأداء والكفاءة في التطوير التقني.",
    image: avatar,
    skills: ["React", "Next.js", "Javascript", "Nodejs", "Tailwindcss"],

    links: [
      {
        icon: <FiInstagram className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiFacebook className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiLinkedin className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FaWhatsapp className="text-white" size={20} />,
        link: "/",
      },
    ],
    cv: "",
  },
  {
    name: "سارة إبراهيم",
    job: "مصممة تجربة المستخدم",
    description:
      "مصممة تجربة مستخدم موهوبة تجمع بين الإبداع الفني والفهم العميق لاحتياجات المستخدمين. تسعى دائمًا لخلق تصاميم بديهية وجذابة تعزز التفاعل والسهولة.",
    image: avatar,
    skills: ["React", "Next.js", "Javascript", "Nodejs", "Tailwindcss"],

    links: [
      {
        icon: <FiInstagram className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiFacebook className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FiLinkedin className="text-white" size={20} />,
        link: "/",
      },
      {
        icon: <FaWhatsapp className="text-white" size={20} />,
        link: "/",
      },
    ],
    cv: "",
  },
];

export const SERVICES: IService[] = [
  {
    img: designingImage,
    title: "التصميم الرقمي",
    description:
      "نصمم هويات بصرية متميزة وواجهات مستخدم جذابة تعكس جوهر علامتك التجارية وتجذب انتباه العملاء.",
  },
  {
    img: codingImage,
    title: "البرمجة",
    description:
      "نطور حلولًا برمجية متكاملة باستخدام أحدث التقنيات، مع التركيز على الأداء العالي والموثوقية.",
  },
  {
    img: hostingImage,
    title: "الاستضافة",
    description:
      "خدمات استضافة آمنة وموثوقة مع أداء عالي وتوفر مستمر لمواقعك وتطبيقاتك الرقمية.",
  },
  {
    img: softwareImage,
    title: "هندسة البرمجيات",
    description:
      "نقدم حلولًا برمجية معقدة باستخدام أفضل الممارسات الهندسية لتلبية احتياجات عملك المتطورة.",
  },
  {
    img: socialImage,
    title: "التسويق الرقمي",
    description:
      "استراتيجيات تسويق متكاملة تساعدك على الوصول إلى جمهورك المستهدف عبر منصات متعددة.",
  },
  {
    img: coloringImage,
    title: "تصميم الهوية البصرية",
    description:
      "نبتكر تصميمات لهوية بصرية متميزة تعكس شخصية علامتك التجارية وتميزها في السوق.",
  },
  {
    img: contentImage,
    title: "إنتاج المحتوى",
    description:
      "محتوى رقمي جذاب ومؤثر يروي قصة علامتك التجارية ويجذب جمهورك المستهدف.",
  },
  {
    img: responsiveImage,
    title: "التصميم سريع الاستجابة",
    description:
      "تصميمات متجاوبة تعمل بكفاءة على جميع الأجهزة والشاشات، مع تجربة مستخدم سلسة.",
  },
];

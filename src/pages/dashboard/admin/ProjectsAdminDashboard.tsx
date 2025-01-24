import projectImg from "../../../assets/project-img.png";
import ProjectCard from "../../../components/dashboard/ProjectCard";
import { IProject } from "../../../interfaces";

const ProjectsAdminDashboard = () => {
  const projectsData: IProject[] = [
    {
      id: 1,
      title: "نظام الألواح الشمسية للكواكب",
      description:
        "مشروع متكامل لتصميم نظام إدارة وتتبع الألواح الشمسية باستخدام أحدث التقنيات والحلول البرمجية المبتكرة.",
      img: projectImg,
      url: "",
      category: "واجهة أمامية",
    },
    {
      id: 2,
      title: "تطبيق إدارة المشاريع الرقمية",
      description:
        "حل برمجي متطور لإدارة المشاريع الرقمية يوفر واجهة مستخدم سلسة وسهلة الاستخدام.",
      img: projectImg,
      url: "",
      category: "تصميم واجهة المستخدم",
    },
    {
      id: 3,
      title: "منصة التعلم الإلكتروني",
      description:
        "منصة تعليمية ذكية تجمع بين أحدث تقنيات التعلم عن بعد وتصميم تفاعلي متميز.",
      img: projectImg,
      url: "",
      category: "هندسة البرمجيات",
    },
    {
      id: 4,
      title: "تطبيق الصحة الذكي",
      description:
        "تطبيق شامل لمتابعة الحالة الصحية وتقديم استشارات طبية عن بعد.",
      img: projectImg,
      url: "",
      category: "واجهة أمامية",
    },
    {
      id: 5,
      title: "متجر إلكتروني متكامل",
      description:
        "حل متكامل للتجارة الإلكترونية مع تصميم جذاب وتجربة مستخدم فريدة.",
      img: projectImg,
      url: "",
      category: "تصميم واجهة المستخدم",
    },
    {
      id: 6,
      title: "نظام إدارة الموارد البشرية",
      description:
        "برنامج متطور لإدارة شؤون الموظفين وأتمتة العمليات التنظيمية.",
      img: projectImg,
      url: "",
      category: "هندسة البرمجيات",
    },
    {
      id: 7,
      title: "تطبيق النقل الذكي",
      description:
        "حل مبتكر لتتبع وإدارة وسائل النقل العامة بواجهة مستخدم سلسة.",
      img: projectImg,
      url: "",
      category: "واجهة أمامية",
    },
    {
      id: 8,
      title: "لوحة تحكم للتحليلات",
      description: "أداة متقدمة لتصور البيانات وتحليل المؤشرات بتصميم احترافي.",
      img: projectImg,
      url: "",
      category: "تصميم واجهة المستخدم",
    },
    {
      id: 9,
      title: "تطبيق إدارة المهام",
      description:
        "أداة فعالة لتنظيم المهام والمشاريع مع واجهة مستخدم سهلة وبديهية.",
      img: projectImg,
      url: "",
      category: "واجهة أمامية",
    },
    {
      id: 10,
      title: "منصة التواصل المؤسسي",
      description: "حل متكامل للتواصل الداخلي وإدارة فرق العمل بتقنيات متطورة.",
      img: projectImg,
      url: "",
      category: "هندسة البرمجيات",
    },
  ];
  return (
    <div className="my-9">
      <h2 className="text-3xl font-medium text-white">إدارة المشاريع</h2>
      <div className="mt-9 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
        {/* Projects Cards */}
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsAdminDashboard;

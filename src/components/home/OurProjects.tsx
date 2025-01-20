import { IProject } from "../../interfaces";
import SectionTitle from "../SectionTitle";
import projectImg from "../../assets/project-img.png";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { CgArrowTopRightO } from "react-icons/cg";
import ProjectCard from "../ProjectCard";

const OurProjects = () => {
  const projects: IProject[] = [
    {
      id: 1,
      title: "نظام الألواح الشمسية للكواكب",
      description:
        "مشروع متكامل لتصميم وتطوير نظام إدارة وتتبع الألواح الشمسية للكواكب، يوفر حلولاً مبتكرة للطاقة المتجددة.",
      img: projectImg,
      url: "",
      category: "واجهة المستخدم",
    },
    {
      id: 2,
      title: "تطبيق إدارة المشاريع الذكية",
      description:
        "تطبيق متقدم لإدارة المشاريع يجمع بين سهولة الاستخدام والكفاءة العالية، مصمم لتبسيط عمليات التخطيط والتنفيذ.",
      img: projectImg,
      url: "",
      category: "واجهة المستخدم",
    },
    {
      id: 3,
      title: "منصة التعلم الإلكتروني التفاعلية",
      description:
        "منصة تعليمية متطورة تقدم تجربة تعلم فريدة مع واجهة مستخدم سلسة وتصميم جذاب يناسب مختلف الأعمار.",
      img: projectImg,
      url: "",
      category: "تصميم واجهة المستخدم",
    },
    {
      id: 4,
      title: "تطبيق الصحة الذكي",
      description:
        "تطبيق شامل لتتبع الحالة الصحية ومراقبة اللياقة البدنية مع تصميم عصري وتجربة مستخدم مميزة.",
      img: projectImg,
      url: "",
      category: "تصميم واجهة المستخدم",
    },
  ];
  return (
    <section className="container">
      <SectionTitle title="مشاريعنا" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-[18px] lg:mt-[36px]">
        <Button className="lg:w-fit bg-btn-secondary hover:bg-btn-secondary-hover rounded-xl">
          <Link
            to={"/projects"}
            className="px-8 sm:px-24 h-[56px] flex justify-center items-center gap-x-3 text-white text-lg font-medium normal-case"
          >
            عرض المزيد
            <span>
              <CgArrowTopRightO className="h-5 w-5 text-white" size={20} />
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default OurProjects;

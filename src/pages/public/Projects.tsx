import { useMemo, useRef, useState } from "react";
import { IProject } from "../../interfaces";
import projectImg from "../../assets/project-img.png";
import { filterProjectsByCategory } from "../../utils/filterProjectsByCategory";
import BgImage from "../../components/BgImage";
import ProjectCard from "../../components/ProjectCard";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const projectsRef = useRef(null);

  const isProjectsInView = useInView(projectsRef, {
    once: true,
    amount: 0.2,
    margin: "350px 0px 600px 0px",
  });

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.4,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const categories = [
    "الكل",
    "واجهة أمامية",
    "تصميم واجهة المستخدم",
    "هندسة البرمجيات",
  ];
  const [filter, setFilter] = useState<string>("الكل");

  const filteredProjects = useMemo(() => {
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
        description:
          "أداة متقدمة لتصور البيانات وتحليل المؤشرات بتصميم احترافي.",
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
        description:
          "حل متكامل للتواصل الداخلي وإدارة فرق العمل بتقنيات متطورة.",
        img: projectImg,
        url: "",
        category: "هندسة البرمجيات",
      },
    ];
    return filterProjectsByCategory({
      projects: projectsData,
      category: filter,
    });
  }, [filter]);

  return (
    <>
      <BgImage />
      <div className="container">
        {/* Categories */}
        <div className="flex justify-center items-center mt-9 lg:mt-[72px] mb-9">
          <div className="bg-background-gradient flex justify-center flex-wrap gap-4 rounded-2xl px-4 py-2">
            {categories.map((category) => (
              <span
                key={category}
                className={`text-white text-center font-medium lg:text-lg capitalize p-2 cursor-pointer rounded-lg transition-all duration-300 ease-in-out ${
                  filter === category ? "bg-dark" : "bg-dark-blue"
                }`}
                onClick={() => {
                  setFilter(category);
                }}
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <motion.div
          ref={projectsRef}
          initial="visible"
          animate={isProjectsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-6 lg:gap-y-9 gap-x-6"
        >
          {filteredProjects.map((project: IProject, index: number) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              custom={index}
              initial="hidden"
              animate={"visible"}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "tween", stiffness: 300 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Projects;

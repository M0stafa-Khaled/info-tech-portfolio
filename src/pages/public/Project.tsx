import BgImage from "../../components/BgImage";
import projectImg from "../../assets/project-img.png";
//import avatar from "../../assets/about-avatar.png";
import { motion } from "framer-motion";
import ProjectDetails from "../../components/project/ProjectDetails";
import { IProject } from "../../interfaces";
import ProjectImagesSlider from "../../components/project/ProjectImagesSlider";
import { containerVariants } from "../../animations";

const Project = () => {
  const projectDetails: IProject = {
    id: 1,
    title: "منصة التعلم الإلكتروني",
    url: "",
    description:
      "منصة تعليمية ذكية تجمع بين أحدث تقنيات التعلم عن بعد وتصميم تفاعلي متميز.",
    category: "واجهة أمامية",
    hidden: false,
    images: [projectImg, projectImg, projectImg, projectImg],
    technologies: [
      "react",
      "typescript",
      "express",
      "node",
      "mongodb",
      "tailwind",
    ],
    rating: 4,
    /*developers: [
      {
        name: "محمد الحسني",
        avatar: avatar,
        job: "مطور واجهة أمامية",
      },
      {
        name: "أحمد الفارس",
        avatar: avatar,
        job: "مطور الخوادم",
      },
      {
        name: "سارة العتيبي",
        avatar: avatar,
        job: "مصممة واجهة المستخدم",
      },
      {
        name: "عبدالله الراشد",
        avatar: avatar,
        job: "مطور خوادم",
      },
      {
        name: "ليلى السلمان",
        avatar: avatar,
        job: "مطورة برمجيات",
      },
      {
        name: "خالد المطيري",
        avatar: avatar,
        job: "مهندس DevOps",
      },
    ],*/
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      <BgImage />
      <div className="container mt-9">
        <ProjectImagesSlider images={projectDetails.images} />
        {/* Project Details */}
        <ProjectDetails projectDetails={projectDetails} />
      </div>
    </motion.div>
  );
};

export default Project;

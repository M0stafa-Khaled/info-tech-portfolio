import SectionTitle from "../SectionTitle";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { CgArrowTopRightO } from "react-icons/cg";
import ProjectCard from "../projects/ProjectCard";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { buttonVariants, cardVariants, titleVariants } from "../../animations";
import { useGetAllPublicProjects } from "../../lib/react-query/projects";
import ProjectCardSkeleton from "../ui/ProjectCardSkeleton";
import { toast } from "react-toastify";

const OurProjects = () => {
  const ref = useRef(null);
  const {
    data: projects,
    isLoading: isLoadingProjects,
    error,
  } = useGetAllPublicProjects();

  useEffect(() => {
    if (error) toast.error("لقد حدث خطأ اثناء عرض المشاريع حاول لاحقا");
  }, [error]);

  if (isLoadingProjects)
    return (
      <div className="container py-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      </div>
    );

  return (
    <section className="container" ref={ref}>
      <motion.div
        variants={titleVariants}
        initial="visible"
        animate={"visible"}
      >
        <SectionTitle title="مشاريعنا" />
      </motion.div>
      {!projects?.data.length ? (
        <h2 className="text-white text-xl lg:text-2xl my-6 text-center">
          لا يوجد مشاريع
        </h2>
      ) : (
        <motion.div
          key="projects-grid"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          initial="visible"
          animate={"visible"}
        >
          {projects?.data.splice(0, 6).map((project, idx) => (
            <motion.div
              key={`project-${project.id}`}
              custom={idx}
              variants={cardVariants}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      )}

      {!error && projects?.data.length ? (
        <motion.div
          className="flex justify-center mt-[18px] lg:mt-[36px]"
          variants={buttonVariants}
          initial="visible"
          animate={"visible"}
        >
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
        </motion.div>
      ) : null}
    </section>
  );
};

export default OurProjects;

import SectionTitle from "../SectionTitle";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { CgArrowTopRightO } from "react-icons/cg";
import ProjectCard from "../projects/ProjectCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { buttonVariants, cardVariants, titleVariants } from "../../animations";
import { PROJECTS } from "../../constant";

const OurProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "250px 0px 250px 0px",
  });

  return (
    <section className="container" ref={ref}>
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <SectionTitle title="مشاريعنا" />
      </motion.div>
      <motion.div
        key="projects-grid"
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={`project-${project.id}`}
            custom={idx}
            variants={cardVariants}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="flex justify-center mt-[18px] lg:mt-[36px]"
        variants={buttonVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
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
    </section>
  );
};

export default OurProjects;

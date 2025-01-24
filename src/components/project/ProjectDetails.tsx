import { motion } from "framer-motion";
import { CgArrowTopRightO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { IProject } from "../../interfaces";
import ProjectDevelopers from "./ProjectDevelopers";
import ProjectRating from "./ProjectRating";
import { cardVariants } from "../../animations";
import Skills from "../shared/Skills";

interface IProps {
  projectDetails: IProject;
}
const ProjectDetails = ({ projectDetails }: IProps) => {
  return (
    <>
      {/* Title and Link */}
      <motion.div
        variants={cardVariants}
        className="py-6 px-4 lg:px-4 mt-6 lg:mt-9 space-y-4 bg-background-gradient rounded-2xl lg:rounded-3xl"
      >
        <motion.div
          variants={cardVariants}
          className="flex items-center flex-col lg:flex-row gap-x-9 gap-y-4"
        >
          <h1 className="text-center lg:text-right text-xl md:text-[28px] lg:text-4xl font-medium text-white">
            {projectDetails.title}
          </h1>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to={""}
              className="text-lg lg:text-xl text-yellow flex items-center gap-x-2 px-2 min-w-48 justify-center"
            >
              معاينة
              <span>
                <CgArrowTopRightO className="h-5 w-5 text-yellow" size={20} />
              </span>
            </Link>
          </motion.div>
        </motion.div>
        {/* Rating */}
        <ProjectRating rating={projectDetails.rating} />
        {/* Description */}
        <motion.p
          variants={cardVariants}
          className="text-center lg:text-right text-muted leading-relaxed lg:text-lg"
        >
          {projectDetails.description}
        </motion.p>
        {/* Technologies */}
        <Skills skills={projectDetails.technologies} />
        {/* Developers */}
        <ProjectDevelopers developers={projectDetails.developers} />
      </motion.div>
    </>
  );
};

export default ProjectDetails;

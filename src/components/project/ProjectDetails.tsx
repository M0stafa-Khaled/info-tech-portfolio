import { motion } from "framer-motion";
import { CgArrowTopRightO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { IProject } from "../../interfaces";
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
        className="px-4 lg:px-4 mt-4 space-y-4 bg--gradient rounded-2xl lg:rounded-3xl"
      >
        <motion.div
          variants={cardVariants}
          className="flex items-center flex-col lg:flex-row gap-x-9 gap-y-2"
        >
          <h1 className="text-center lg:text-right text-xl md:text-[28px] lg:text-2xl font-medium text-white">
            {projectDetails?.title}
          </h1>
          <div>
            <Link
              to={projectDetails.url}
              className="text-lg lg:text-lg text-yellow flex items-center gap-x-2 px-2 min-w-48 justify-center lg:justify-start"
            >
              معاينة
              <span>
                <CgArrowTopRightO className="h-5 w-5 text-yellow" size={20} />
              </span>
            </Link>
          </div>
        </motion.div>
        {/* Description */}
        <motion.p
          variants={cardVariants}
          className="text-center lg:text-right text-muted leading-relaxed"
        >
          {projectDetails?.descriptions}
        </motion.p>
        {/* Technologies */}
        <Skills skills={projectDetails?.tool} />
        {/* Developers */}
      </motion.div>
    </>
  );
};

export default ProjectDetails;

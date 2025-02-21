/*import { motion } from "framer-motion";
import DeveloperCard from "./DeveloperCard";
import { cardVariants, containerVariants } from "../../animations";

interface IProps {
  developers: {
    avatar: string;
    name: string;
    job: string;
  }[];
}

const ProjectDevelopers = ({ developers }: IProps) => {
  return (
    <>
      <motion.div
        variants={cardVariants}
        className="flex flex-col justify-center items-center lg:items-start gap-y-4"
      >
        <h2 className="text-white text-2xl lg:text-3xl">طُوِّر بواسطة</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full"
        >
          {developers.map(({ avatar, name, job }, idx) => (
            <DeveloperCard avatar={avatar} name={name} job={job} key={idx} />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectDevelopers;*/

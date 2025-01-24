import { motion } from "framer-motion";
import { Badge } from "keep-react";
import { cardVariants, techItemVariants } from "../../animations";

interface IProps {
  skills: string[];
}
const Skills = ({ skills }: IProps) => {
  return (
    <>
      <motion.div
        variants={cardVariants}
        className="flex flex-wrap gap-2 justify-center lg:justify-start"
      >
        {skills.map((skill) => (
          <motion.div key={skill} variants={techItemVariants}>
            <Badge
              variant="base"
              color="primary"
              className="text-primary-500 bg-primary-900"
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Skills;

import { motion } from "framer-motion";
import { cardVariants } from "../../animations";

interface IProps {
  avatar: string;
  name: string;
  job: string;
}
const DeveloperCard = ({ avatar, name, job }: IProps) => {
  return (
    <>
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.03 }}
        className="flex items-center gap-x-4 bg-dark-blue px-4 py-2 rounded-2xl w-full shadow-md"
      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          loading="lazy"
          src={avatar}
          alt={name}
          className="h-14 w-14 rounded-full"
        />
        <div className="flex flex-col gap-y-2">
          <h3 className="text-white font-medium text-lg lg:text-xl">{name}</h3>
          <span className="text-muted text-sm">{job}</span>
        </div>
      </motion.div>
    </>
  );
};

export default DeveloperCard;

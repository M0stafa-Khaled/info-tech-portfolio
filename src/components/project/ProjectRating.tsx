import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { cardVariants } from "../../animations";

const ProjectRating = ({ rating }: { rating: number }) => {
  return (
    <>
      <motion.div
        variants={cardVariants}
        className="flex flex-wrap gap-2 items-center justify-center lg:justify-start"
      >
        <span className="text-muted">(٤/٥)</span>
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                delay: index * 0.1,
              },
            }}
          >
            <FaStar
              fill={index < rating ? "gold" : "gray"}
              className={`w-6 h-6 ${
                index < rating ? "text-amber-500" : "text-gray-300"
              }`}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default ProjectRating;

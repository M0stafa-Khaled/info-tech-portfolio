import { cardVariants } from "../../animations";
import { TEAM_MEMBERS } from "../../constant";
import MemberCard from "./MemberCard";
import { motion } from "framer-motion";

const MembersList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {TEAM_MEMBERS.map((member, idx) => (
        <motion.div
          key={idx}
          variants={cardVariants}
          custom={idx}
          initial="hidden"
          animate={"visible"}
        >
          <MemberCard member={member} />
        </motion.div>
      ))}
    </div>
  );
};

export default MembersList;

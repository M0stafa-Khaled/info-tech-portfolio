import { cardVariants } from "../../animations";
import { useGetAllEmployees } from "../../lib/react-query/employees";
import SessionService from "../../utils/SessionService";
import Loader from "../Loader";
import MemberCard from "./MemberCard";
import { motion } from "framer-motion";

const MembersList = () => {
  const token = SessionService.getToken();
  const { data: members, isLoading } = useGetAllEmployees(token!);

  if (isLoading) return <Loader />;
  return (
    <>
      {!members?.data.length ? (
        <p className="font-medium text-center text-white text-lg">لا يوجد</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {members?.data.map((member, idx) => (
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
      )}
    </>
  );
};

export default MembersList;

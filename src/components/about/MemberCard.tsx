import { motion } from "framer-motion";
import { cardVariants } from "../../animations";
import { IEmployee } from "../../interfaces";

interface IProps {
  member: IEmployee;
}

const MemberCard = ({ member: { image, user, specialization } }: IProps) => {
  return (
    <>
      <motion.div
        variants={cardVariants}
        className="bg-background-gradient py-4 px-6 rounded-2xl space-y-4 border border-dark-blue"
      >
        <div className="flex flex-col justify-between w-full h-full">
          <div className="flex flex-col lg:flex-row items-center gap-y-4 gap-x-3">
            <div className="flex justify-center items-center rounded-full overflow-hidden">
              <img
                src={
                  image
                    ? `${import.meta.env.VITE_API_URL}/employees/${image}`
                    : "/user.webp"
                }
                alt={user.name}
                className="w-20 md:w-28 h-20 md:h-28"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-white text-center lg:text-start text-xl">
                {user.name}
              </h3>
              <p className="text-muted text-sm text-center lg:text-start font-light">
                {specialization}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MemberCard;

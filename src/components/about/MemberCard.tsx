import { motion } from "framer-motion";
import { cardVariants } from "../../animations";
import SocialLinkIcon from "../SocialLinkIcon";
import { ITeamMember } from "../../interfaces";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import Skills from "../shared/Skills";

interface IProps {
  member: ITeamMember;
}

const MemberCard = ({
  member: { image, name, job, skills, cv, description, links },
}: IProps) => {
  return (
    <>
      <motion.div
        variants={cardVariants}
        className="bg-background-gradient py-4 px-6 rounded-2xl lg:rounded-3xl space-y-4"
      >
        <div className="flex flex-col justify-between w-full h-full">
          <div className="flex flex-col lg:flex-row items-center gap-y-4 gap-x-3">
            <div className="flex justify-center items-center">
              <img src={image} alt={name} className="max-w-32" />
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-white text-center lg:text-start text-3xl">
                {name}
              </h3>
              <p className="text-muted text-center lg:text-start font-light">
                {job}
              </p>
            </div>
          </div>
          <p className="text-muted text-center lg:text-start text-sm leading-relaxed">
            {description}
          </p>
          <div className="">
            {/* Technologies Skills */}
            <div className="flex justify-center lg:justify-start items-center flex-wrap gap-2 mt-2">
              <Skills skills={skills} />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-y-4 gap-x-3 mt-4">
              {/* Links */}
              <div className="flex justify-center lg:justify-start items-center flex-wrap gap-x-4 gap-y-2">
                {links.map((link, idx) => (
                  <SocialLinkIcon key={idx} link={link.link} icon={link.icon} />
                ))}
              </div>
              {/* Download CV */}
              <div>
                <Button className="bg-dark rounded-lg">
                  <Link
                    to={cv}
                    className="flex justify-center items-center px-3 py-2 text-white"
                  >
                    تحميل السيرة الذاتية
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MemberCard;

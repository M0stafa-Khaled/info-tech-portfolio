import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IProps {
  link: string;
  icon: ReactNode;
}

const SocialLinkIcon = ({ link, icon }: IProps) => {
  return (
    <Link
      to={link}
      className="flex justify-center items-center rounded-xl bg-dark-blue w-10 h-10"
    >
      {icon}
    </Link>
  );
};

export default SocialLinkIcon;

import { Button as MButton } from "@material-tailwind/react";
import { ReactNode } from "react";

interface IProps {
  primary?: boolean;
  className?: string;
  children: ReactNode;
}
const Button = ({ primary, className, children }: IProps) => {
  return (
    <MButton
      className={`${primary ? "bg-btn-primary" : "bg-btn-secondary"} ${
        primary ? "hover:bg-btn-primary-hover" : "hover:bg-btn-secondary-hover"
      }-hover p-0 rounded-xl transition-all duration-300 lg:w-[350px] ${className}`}
    >
      {children}
    </MButton>
  );
};

export default Button;

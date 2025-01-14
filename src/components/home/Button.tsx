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
      className={`bg-btn-${primary ? "primary" : "secondary"} hover:bg-btn-${
        primary ? "primary" : "secondary"
      }-hover p-0 rounded-xl transition-all duration-300 lg:w-[350px] ${className}`}
    >
      {children}
    </MButton>
  );
};

export default Button;

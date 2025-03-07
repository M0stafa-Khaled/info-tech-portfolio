import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}
const Button = ({
  primary,
  className,
  children,
  type = "button",
  ...rest
}: IProps) => {
  return (
    <button
      className={`p-0 duration-300 align-middle select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85]
      ${className}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

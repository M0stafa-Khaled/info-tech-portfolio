import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Label = ({ children, className }: IProps) => {
  return (
    <label
      className={`flex w-full h-full select-none pointer-events-none absolute font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content[''] after:block after:w-full after:absolute after:-bottom-1.5 left-0  after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.25] !text-muted focus:!text-white ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;

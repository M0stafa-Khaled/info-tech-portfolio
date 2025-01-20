import { TextareaHTMLAttributes } from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = ({ className, ...rest }: IProps) => {
  return (
    <textarea
      className={`peer w-full min-h-[100px] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none disabled:cursor-not-allowed transition-all border-b placeholder-shown:border-blue-gray-200 text-sm pt-4 pb-2 border-blue-gray-200 focus:border-muted !resize-none text-white !border-muted h-[50px] ${className}`}
      {...rest}
      placeholder=" "
    ></textarea>
  );
};

export default Textarea;

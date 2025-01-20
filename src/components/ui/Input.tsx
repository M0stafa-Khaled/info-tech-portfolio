import { InputHTMLAttributes, Ref, forwardRef } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  className?: string;
}
export const Input = forwardRef(
  ({ type, className, ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        type={type}
        {...rest}
        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all border-b placeholder-shown:border-blue-gray-200 placeholder:opacity-0 focus:placeholder:opacity-100 text-sm pt-4 pb-1.5 text-white !border-muted focus:!border-muted after:!bg-muted min-w-fit"
        placeholder=" "
      />
    );
  }
);

export default Input;

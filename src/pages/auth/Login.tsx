import logo from "../../assets/logo.png";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import loginSchema from "../../validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LOGIN_FORM_INPUTS } from "../../constant";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (_data: z.infer<typeof loginSchema>) => {
    navigate("/dashboard/admin");
  };

  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-y-6">
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container max-w-md lg:max-w-full lg:w-full space-y-9"
        >
          {LOGIN_FORM_INPUTS.map((input, idx) => (
            <div>
              <div key={idx} className="relative w-full min-w-[200px] h-11">
                <Input type={input.type} {...register(input.name)} />
                <Label>{input.label}</Label>
              </div>
              {errors[input.name] && (
                <p className="text-red-500 text-xs mt-2">
                  {errors[input.name]?.message}
                </p>
              )}
            </div>
          ))}
          <Button
            type="submit"
            className="bg-btn-primary w-full py-4 lg:py-6 rounded-xl text-white text-xl focus:outline-none !mt-12"
          >
            تسجيل الدخول
          </Button>
        </form>
      </div>
      <div className="container flex justify-center items-center w-full lg:w-1/2 lg:min-h-screen lg:border-r border-dark-blue lg:bg-background-gradient">
        <img src={logo} alt="logo" className="max-w-full" />
      </div>
    </div>
  );
};

export default Login;

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import loginSchema from "../../validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LOGIN_FORM_INPUTS } from "../../constant";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../../lib/react-query/auth";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../app/features/auth/authSlice";
import ReverseProtectedRoute from "../../components/auth/ReverseProtectedRoute";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import SessionService from "../../utils/SessionService";
import { useGetAllSettings } from "../../lib/react-query/settings";
import { addSettings } from "../../app/features/settings/settingsSlice";
import { RootState } from "../../app/store";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = SessionService.getToken();
  const { mutateAsync: loginUser, isPending } = useLoginUser();
  const { data, isSuccess } = useGetAllSettings(token!);

  const {
    settings: { logo, name },
  } = useSelector((state: RootState) => state.settings);

  if (isSuccess && data) {
    dispatch(addSettings({ settings: data }));
  }

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

  const onSubmit = async (formData: z.infer<typeof loginSchema>) => {
    try {
      const { message, data, token } = await loginUser({ ...formData });
      if (!data) return toast.error(message);
      dispatch(login({ token, data }));
      toast.success(message);
      return navigate("dashboard/admin");
    } catch (error) {
      const errorObj = error as AxiosError<{ message: string }>;
      if (errorObj.response?.data && errorObj.status !== 500)
        return toast.error(
          errorObj.response?.data.message || "هناك خطأ حاول لاحقا"
        );
      return toast.error("هناك خطأ حاول لاحقا");
    }
  };

  return (
    <ReverseProtectedRoute>
      <Helmet>
        <title>{name}</title>
      </Helmet>

      <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-y-14">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md lg:max-w-sm w-full space-y-9 px-3"
          >
            {LOGIN_FORM_INPUTS.map((input, idx) => (
              <div key={idx}>
                <div className="relative w-full min-w-[200px] h-11">
                  <Input
                    type={input.type}
                    {...register(
                      input.name as keyof z.infer<typeof loginSchema>
                    )}
                  />
                  <Label>{input.label}</Label>
                </div>
                {errors[input.name as keyof z.infer<typeof loginSchema>] && (
                  <p className="text-red-500 text-xs mt-2">
                    {
                      errors[input.name as keyof z.infer<typeof loginSchema>]
                        ?.message
                    }
                  </p>
                )}
              </div>
            ))}
            <Button
              type="submit"
              className="bg-btn-primary w-full py-4 rounded-lg text-white text-xl focus:outline-none !mt-12 flex justify-center items-center gap-3"
              disabled={isPending}
            >
              تسجيل الدخول
              {isPending && (
                <AiOutlineLoading3Quarters
                  className="animate-spin text-white"
                  size={20}
                />
              )}
            </Button>
          </form>
        </div>
        <div className="container flex justify-center items-center w-full lg:w-1/2 lg:min-h-screen lg:border-r border-dark-blue lg:bg-background-gradient">
          <img
            src={logo || "/logo.webp"}
            alt="logo"
            className="max-w-full w-60 lg:w-72"
          />
        </div>
      </div>
    </ReverseProtectedRoute>
  );
};

export default Login;

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import registerSchema from "../../validations/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const Register = () => {
  const [_isLoading, _setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {};

  return <section>Regiser</section>;
};

export default Register;

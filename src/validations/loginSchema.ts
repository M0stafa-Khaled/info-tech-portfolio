import { z } from "zod";

const loginSchema = z.object({
  email: z.string({ message: "ادخل البريد الالكتروني" }).email({
    message: "ادخل بريد الكتروني صحيح",
  }),
  password: z.string().min(1, { message: "ادخل كلمة المرور" }),
});

export default loginSchema;

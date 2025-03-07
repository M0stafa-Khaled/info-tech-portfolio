import { z } from "zod";
const registerSchema = z.object({
  name: z.string({ message: "الاسم مطلوب" }).min(1, { message: "الاسم مطلوب" }),
  email: z.string({ message: "البريد الإلكتروني مطلوب" }).email({
    message: "يجب أن يكون البريد الإلكتروني صحيحًا",
  }),
  phone: z.string({ message: "الهاتف مطلوب" }).min(9, {
    message: "يجب أن يكون الهاتف صالح",
  }),
  password: z
    .string({ message: "كلمة المرور مطلوبة" })
    .min(8, { message: "يجب أن تكون كلمة المرور 8 أحرف أو أرقام على الأقل" }),
  confirm_password: z.string(),
});

export default registerSchema;

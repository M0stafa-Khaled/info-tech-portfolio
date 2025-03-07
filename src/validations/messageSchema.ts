import { z } from "zod";

const messageSchema = z.object({
  firstname: z
    .string({ message: "ادخل الاسم" })
    .min(1, { message: "الاسم الاول مطلوب" }),
  lastname: z
    .string({ message: "ادخل الاسم" })
    .min(1, { message: "الاسم الاخير مطلوب" }),
  address: z
    .string({ message: "ادخل العنوان" })
    .min(1, { message: "العنوان مطلوب" }),
  mobile: z.string({ message: "ادخل الهاتف" }).min(9, {
    message: "ادخل الهاتف صالح",
  }),
  email: z.string({ message: "ادخل البريد الالكتروني" }).email({
    message: "ادخل بريد الكتروني صحيح",
  }),
  title: z
    .string({ message: "ادخل عنوان الرسالة" })
    .min(1, { message: "عنوان الرسالة مطلوب" }),
  message: z
    .string({ message: "ادخل الرسالة" })
    .min(1, { message: "الرسالة مطلوبة" }),
});

export default messageSchema;

import { z } from "zod";

const settingsSchema = z.object({
  name: z.string({ message: "ادخل الاسم" }),
  phone: z.string({ message: "ادخل رقم الهاتف" }),
  email: z.string({ message: "ادخل البريد الإلكتروني" }),
  logo: z.string({ message: "ادخل رابط الشعار" }),
  facebook: z.string({ message: " ادخل رابط الحساب" }),
  instagram: z.string({ message: " ادخل رابط الحساب" }),
  twitter: z.string({ message: " ادخل رابط الحساب" }),
  address: z.string({ message: "ادخل العنوان" }),
  youtube: z.string({ message: "ادخل رابط قناة اليويتوب" }),
  tiktok: z.string({ message: "ادخل رابط الحساب" }),
});

export default settingsSchema;

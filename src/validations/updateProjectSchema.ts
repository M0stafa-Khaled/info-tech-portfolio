import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "../constant";

const updateProjectSchema = z.object({
  title: z.string({ message: "ادخل عنوان المشروع" }).min(1, {
    message: " العنوان مطلوب",
  }),
  descriptions: z.string({ message: "ادخل وصف للمشروع" }).min(1, {
    message: "الوصف يجب أن يكون على الأقل 10 حرفًا",
  }),
  tool: z.string({ message: "ادخل ادوات المستخدمة" }).min(1, {
    message: "ادخل ادوات المستخدمة",
  }),
  url: z.string({ message: "ادخل الرابط" }).min(1, { message: "ادخل الرابط" }),
  category: z
    .string({ message: "ادخل القسم" })
    .min(1, { message: "ادخل القسم" }),
  hidden: z.boolean().default(false),
  image: z
    .array(
      z
        .instanceof(File)
        .refine((file) => file.size <= MAX_FILE_SIZE, {
          message: "حجم الصورة يجب أن يكون أقل من 5MB",
        })
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
          message: "الصورة يجب أن تكون JPEG, PNG, JPG, أو WEBP",
        }),
      {
        message: "الصورة مطلوبة",
      }
    )
});

export default updateProjectSchema;

import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const projectSchema = z.object({
  title: z
    .string({ message: "ادخل اسم المشروع" })
    .min(20, { message: "الاسم يجب الا يقل عن 20 حرف" })
    .max(100, {
      message: "الاسم يجب الا يزيد عن 100 حرف",
    }),
  description: z
    .string({ message: "ادخل وصف للمشروع" })
    .min(100, {
      message: "الوصف يجب الا يقل عن 100 حرف",
    })
    .max(500, {
      message: "الوصف يجب الا يزيد عن 500 حرف",
    }),
  tools: z
    .string({ message: "ادخل ادوات المستخدمة" })
    .refine((tools) => tools.split(" ").length > 1, {
      message: "الادوات يجب الا يتكون من مزيج من ادوات",
    }),
  url: z.string({ message: "ادخل الرابط" }).url({
    message: "ادخل رابط صحيح",
  }),
  category: z.string({ message: "ادخل القسم" }),
  hidden: z.boolean().default(false),
  imgOne: z
    .instanceof(File, { message: "يجب ادخال صورة" })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "حجم الصورة يجب أن يكون أقل من 5MB",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "الصورة يجب أن تكون JPEG, PNG, JPG, أو WEBP",
    }),
  imgTwo: z
    .instanceof(File, { message: "يجب ادخال صورة" })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "حجم الصورة يجب أن يكون أقل من 5MB",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "الصورة يجب أن تكون JPEG, PNG, JPG, أو WEBP",
    }),
  imgThree: z
    .instanceof(File, { message: "يجب ادخال صورة" })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "حجم الصورة يجب أن يكون أقل من 5MB",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "الصورة يجب أن تكون JPEG, PNG, JPG, أو WEBP",
    }),
  imgFour: z
    .instanceof(File, { message: "يجب ادخال صورة" })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "حجم الصورة يجب أن يكون أقل من 5MB",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "الصورة يجب أن تكون JPEG, PNG, JPG, أو WEBP",
    }),
});

export default projectSchema;

import { z } from "zod";

const addEmployeeSchema = z.object({
  user_id: z
    .string({ message: "ادخل المستخدم" })
    .min(1, { message: "المستخدم مطلوب" }),
  specialization: z
    .string({ message: "ادخل التخصص" })
    .min(1, { message: "التخصص مطلوب" }),
});

export default addEmployeeSchema;

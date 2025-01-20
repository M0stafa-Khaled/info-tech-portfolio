import { z } from "zod";

const registerSchema = z.object({
  firstName: z.string({ message: "First name is required" }),
  lastName: z.string({ message: "Last name is required" }),
  email: z.string({ message: "Email is required" }).email({
    message: "Invalid email address",
  }),
  password: z
    .string({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default registerSchema;

import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Please inform your e-mail" })
    .email({ message: "Invalid e-mail" }),
  password: z.string().nonempty({ message: "Please inform your password" }),
});

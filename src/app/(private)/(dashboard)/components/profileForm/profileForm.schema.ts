import { z } from "zod";

export const prorfileFormSchema = z.object({
  username: z.string().min(1, { message: "Please inform a username" }),
  description: z
    .string()
    .max(200, { message: "Max characters limit of 200 reached" }),
});

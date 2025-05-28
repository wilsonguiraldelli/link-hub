import { z } from "zod";

export const linkFormSchema = z.object({
  title: z.string({ required_error: "Please inform a title" }),
  url: z
    .string()
    .url({ message: "Please inform a valid url" })
    .nonempty({ message: "Please inform a url" }),
  active: z.boolean().default(true),
});

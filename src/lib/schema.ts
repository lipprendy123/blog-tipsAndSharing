import { z } from "zod";

export const schemaSignIn = z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Email is not valid" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(5, { message: "Pass such have min 5 char" }),
  });
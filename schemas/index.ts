import { z } from "zod";
export const SignUpSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});
// New Password Schema
export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});

export const NewQuestSchema = z.object({
  name: z.string().min(2, {
    message: "Minimum 2 characters required",
  }),
  description: z.string().min(2, {
    message: "The description must have at least 2 characters"
  }), 
  reward: z.string().min(1, { message: "Add a reward in XP" }),
  type: z.enum(['daily', 'weekly', 'monthly'])
})
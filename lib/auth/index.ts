import {z} from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(12),
  password: z.string().min(6).max(100),
  comfirmPassword: z.string().min(6).max(100),
});

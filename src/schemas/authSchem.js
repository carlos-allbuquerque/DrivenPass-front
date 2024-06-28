import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.string().regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, {
    message: "Email inválido!",
  }),
  password: z
    .string()
    .min(8, {
      message: "A senha deve ter no mínimo 8 caracteres",
    })
    .max(14, {
      message: "A senha deve ter no máximo 10 caracteres",
    })
});

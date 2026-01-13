import z from "zod";

const isoDate = z.codec(
  z.iso.datetime(),
  z.date(),
  {
    decode: (value) => new Date(value),
    encode: (value) => value.toISOString(),
  }
)

export const UserSchema = z
  .object({
    id: z.string().optional(),
    name: z
      .string("Deve ser do tipo texto")
      .min(3, { error: "Deve ter no minimo 3 caracteres" })
      .max(8, { error: "Deve ter no máximo 8 caracteres" }),
    email: z
      .email()
      .meta({ description: "e-mail do usuário", example: "user@email.com" }),
    password: z.string(),
    createdAt: isoDate.optional(),
    updatedAt: isoDate.optional(),
  })
  .meta({
    title: "User",
    description: "Schema de validação de usuário",
  });

export type User = z.infer<typeof UserSchema>;
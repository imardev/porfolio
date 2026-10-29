import { z } from "zod";

export const projectSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio"),

  slug: z
    .string()
    .trim()
    .min(1, "El slug es obligatorio")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "El slug no tiene un formato válido"),
});

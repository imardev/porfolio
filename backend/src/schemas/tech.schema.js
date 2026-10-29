import { z } from "zod";

export const techSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio"),

  descripcion: z.string().trim().min(1, "La descripción es obligatoria"),

  slug: z
    .string()
    .trim()
    .min(1, "El slug es obligatorio")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "El slug no tiene un formato válido"),

  web_url: z.string().url("La URL de la web no es válida"),

  github: z.string().url("La URL de GitHub no es válida"),

  img_url: z.string().url("La URL de la imagen no es válida"),

  tecnologias: z
    .array(z.string().trim().min(1))
    .min(1)
    .refine(
      (tecnologias) => new Set(tecnologias).size === tecnologias.length,
      "No se permiten tecnologías duplicadas",
    ),
});

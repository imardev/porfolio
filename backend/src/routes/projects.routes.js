import { Router } from "express";
import { prisma } from "../../lib/prisma.js";
import { requireWriteKey } from "../middleware/requireWriteKey.js";
import { projectSchema } from "../schemas/project.schema.js";
import { writeLimiter } from "../middleware/rateLimit.js";
const router = Router();

router.get("/", async (req, res) => {
  const projects = await prisma.proyecto.findMany({
    include: {
      tecnologias: true,
    },
  });
  res.status(200).json(projects);
});

router.post("/", writeLimiter, requireWriteKey, async (req, res) => {
  const result = projectSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Datos inválidos",
      detalles: result.error.issues,
    });
  }
  const { nombre, descripcion, slug, web_url, github, img_url, tecnologias } =
    result.data;

  try {
    const project = await prisma.proyecto.create({
      data: {
        nombre,
        descripcion,
        slug,
        web_url,
        github,
        img_url,
        tecnologias: {
          connect: tecnologias.map((slug) => ({ slug })),
        },
      },
      include: {
        tecnologias: true,
      },
    });
    res.status(201).json(project);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({
        error: "Ya existe un proyecto con ese slug",
      });
    }
    if (error.code === "P2025") {
      return res.status(400).json({
        error: "Una de las tecnologías indicadas no existe",
      });
    }
    console.error("Error al crear el proyecto:", error);

    return res.status(500).json({
      error: "Error interno del servidor",
    });
  }
});

router.delete("/:id", writeLimiter, requireWriteKey, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }
  const deleteProject = await prisma.proyecto.delete({
    where: {
      id: id,
    },
  });
  res.status(204).json(deleteProject);
});
export default router;

import { Router } from "express";
import { prisma } from "../../lib/prisma.js";
import { requireWriteKey } from "../middleware/requireWriteKey.js";
import { techSchema } from "../schemas/tech.schema.js";
import { writeLimiter } from "../middleware/rateLimit.js";
const router = Router();

router.get("/", async (req, res) => {
  const tecnologias = await prisma.tecnologia.findMany();
  res.status(200).json(tecnologias);
});

router.post("/", writeLimiter, requireWriteKey, async (req, res) => {
  const result = techSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: "Datos inválidos",
      detalles: result.error.issues,
    });
  }
  const { nombre, slug } = result.data;
  try {
    const tecnologia = await prisma.tecnologia.create({
      data: {
        nombre,
        slug,
      },
    });
    res.status(201).json(tecnologia);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({
        error: "Ya existe una tecnologia con ese slug",
      });
    }

    console.error("Error al crear la tecnologia:", error);

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
  const deleteTech = await prisma.tecnologia.delete({
    where: {
      id: id,
    },
  });
  res.status(204).json(deleteTech);
});
export default router;

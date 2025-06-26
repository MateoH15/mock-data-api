import { Router } from "express";
import PetModel from "../dao/models/Pet.model.js";

const router = Router();

/**
 * @swagger
 * /api/pets:
 *   get:
 *     summary: Obtiene todas las mascotas
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: Lista de mascotas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pet'
 */

router.get("/", async (req, res) => {
  const pets = await PetModel.find();
  res.json(pets);
});

export default router;

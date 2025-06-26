import { Router } from "express";
const router = Router();

/**
 * @swagger
 * /api/adoption:
 *   get:
 *     summary: Endpoint de adopción
 *     responses:
 *       200:
 *         description: Mensaje de adopción
 */
router.get("/", (req, res) => {
  res.json({ message: "Adoption endpoint" });
});

export default router;

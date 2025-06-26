import { Router } from "express";
import { generateMockUsers } from "../utils/mockGenerator.js";
import bcrypt from "bcrypt";
import UserModel from "../dao/models/User.model.js";
import PetModel from "../dao/models/Pet.model.js";

const router = Router();

router.get("/mockingpets", (req, res) => {
  const pets = [];
  for (let i = 0; i < 50; i++) {
    pets.push({
      name: `Pet${i}`,
      species: "Dog",
      age: Math.floor(Math.random() * 10) + 1,
      adopted: false,
    });
  }
  res.json({ status: "success", payload: pets });
});

router.get("/mockingusers", async (req, res) => {
  const users = await generateMockUsers(50);
  res.json({ status: "success", payload: users });
});

router.post("/generateData", async (req, res) => {
  const { users = 0, pets = 0 } = req.body;

  const newUsers = await generateMockUsers(Number(users));
  await UserModel.insertMany(newUsers);

  const newPets = [];
  for (let i = 0; i < Number(pets); i++) {
    newPets.push({
      name: `Pet${i}`,
      species: "Cat",
      age: Math.floor(Math.random() * 15) + 1,
      adopted: false,
    });
  }
  await PetModel.insertMany(newPets);

  res.json({
    status: "success",
    message: `Inserted ${users} users and ${pets} pets.`,
  });
});

export default router;

/**
 * @swagger
 * /api/mocks/mockingpets:
 *   get:
 *     summary: Devuelve 50 mascotas mock
 *     tags: [Mocks]
 *     responses:
 *       200:
 *         description: Lista de mascotas mock
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 payload:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Pet'
 */

/**
 * @swagger
 * /api/mocks/mockingusers:
 *   get:
 *     summary: Devuelve 50 usuarios mock
 *     tags: [Mocks]
 *     responses:
 *       200:
 *         description: Lista de usuarios mock
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 payload:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /api/mocks/generateData:
 *   post:
 *     summary: Genera usuarios y mascotas en la base de datos
 *     tags: [Mocks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               users:
 *                 type: integer
 *               pets:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Inserción exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 */

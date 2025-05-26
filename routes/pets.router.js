import { Router } from 'express';
import PetModel from '../dao/models/Pet.model.js';

const router = Router();

router.get('/', async (req, res) => {
  const pets = await PetModel.find();
  res.json(pets);
});

export default router;
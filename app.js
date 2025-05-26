import express from 'express';
import mongoose from 'mongoose';
import mocksRouter from './routes/mocks.router.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';

const app = express();
app.use(express.json());

app.use('/api/mocks', mocksRouter);
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

await mongoose.connect('mongodb://localhost:27017/mockDB');

app.listen(3000, () => console.log('Server on port 3000'));
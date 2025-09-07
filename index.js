import express from 'express'
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/user.route.js';
import productRoutes from './routes/product.route.js';
import todoRoutes from './routes/todo.route.js';
import authRoutes from './routes/auth.route.js';

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/todos', todoRoutes);

mongoose.connect(process.env.MONGO_URL);

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/')
});


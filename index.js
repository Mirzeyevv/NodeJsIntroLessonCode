import express from 'express'
import userRoutes from './routes/user.route.js';
import productRoutes from './routes/product.route.js';

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

app.use('/api/products', productRoutes);

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/')
});


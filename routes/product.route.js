import express from 'express';
import { getProduct, addProduct, editProduct, deleteProduct } from '../controllers/product.controller.js';
const router = express.Router();

router.get("/", getProduct);

router.post("/add",addProduct);

router.put("/edit/:id", editProduct);

router.delete("/delete/:id", deleteProduct);

export default router;
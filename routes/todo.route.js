import express from 'express';
import { getTodos, addTodo, editTodo, deleteTodo } from '../controllers/todo.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get("/", protect , getTodos);

router.post("/add", protect ,addTodo);

router.put("/edit/:id", protect , editTodo);

router.delete("/delete/:id", protect , deleteTodo);

export default router;
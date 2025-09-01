import express from 'express';
import { getTodos, addTodo, editTodo, deleteTodo } from '../controllers/todo.controller.js';


const router = express.Router();

router.get("/", getTodos);

router.post("/add",addTodo);

router.put("/edit/:id", editTodo);

router.delete("/delete/:id", deleteTodo);

export default router;
import express from 'express';
import { getUser, addUser, editUser, deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/", getUser);

router.post("/add", addUser)

router.put("/edit/:id", editUser)

router.delete("/delete/:id" , deleteUser)


export default router;
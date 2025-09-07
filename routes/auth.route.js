import express from 'express';
import {register, login} from '../controllers/auth.controller.js';
import {protect, restrictTo} from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('me', protect, (req, res) => {
    res.json(req.user)
})

router.get('/admin', protect, restrictTo('admin'), (req, res) => {
    res.json({message: 'Welcome Admin'});
})

export default router;
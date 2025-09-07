import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

export const protect = async (req , res, next) => {
    const auth = req.headers.authorization;

    if(!auth || !auth.startsWith('Bearer ')){
        return res.status(401).json({ error: 'Not authorized, token missing'});
    }

    try {
        const token = auth.split('')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        res.status(401).json({ error: 'Not authorized, token failed' });
    }
}

export const restrictTo = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
            return res.status(403).json({ error: 'Forbidden, you do not have permission to perform this action'});
        }
        next();
    }
}
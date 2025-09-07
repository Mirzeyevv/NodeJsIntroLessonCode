import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const generateToken = (user) => {
    return jwt.sign({
        id: user._id, 
        role: user.role
    }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
};

export const register = async (req, res) =>{
    try{
        const {name, lastName, email, password} = req.body;
        const user = await User.create({name, lastName, email, password});
        const token = generateToken(user);
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({ email })
    if(!user){
        return res.status(404).json({ error: 'User not found for given email'});
    }

    if(!(await user.matchPassword(password))){
        return res.status(401).json({ error: 'Invalid password'})
    }

    const token = generateToken(user);
    res.status(200).json({ token });
}
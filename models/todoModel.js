import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        mingLength: [1, 'Title must be at least 1 character'],
        maxLength: [30, 'Title must be at most 30 characters'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
        mingLength: [1, 'Description must be at least 1 character'],
        maxLength: [100, 'Description must be at most 300 characters'],},
    completed: {
        type: Boolean,
        default: false,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Author is required'],
    }    
} , { timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
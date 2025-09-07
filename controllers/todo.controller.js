import Todo from "../models/todoModel.js";

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({author: req.user._id});
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const addTodo = async (req, res) => {
    const todo = new Todo({...req.body, author: req.user._id});
    try {
        const savedTodo = await todo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const editTodo = async (req, res) => {
    const { id } = req.params;
    try {

        const todo = await Todo.findOne({_id: id, author: req.user._id});
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        todo.title = req.body.title;
        todo.description = req.body.description;
        todo.completed = req.body.completed;

        await todo.save();
        res.status(201).json(todo);
       
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findOneAndDelete({_id: id, author: req.user._id});
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully' });
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
}
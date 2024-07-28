import TODOLIST from "../models/todolist.model.js";


export const gettodos = async (req,res) => {
    try {

        const todos = await TODOLIST.find({});
        res.status(200).json(todos);
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};


export const createTodos = async (req,res) => {
    try {
        const { description , status} = req.body;
        const newTODO = new TODOLIST({
            description,
            status
        });
        const savedTodo = await newTODO.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};



import TODOLIST from "../models/todolist.model.js";

export const gettodos = async (req, res) => {
  try {
    const todos = await TODOLIST.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const todo = await TODOLIST.findById(req.params.id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { description, status } = req.body;
    const newTODO = new TODOLIST({
      description,
      status,
    });
    const savedTodo = await newTODO.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedtodo = await TODOLIST.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedtodo) {
      return res.status(404).json({ message: "book not found" });
    }

    res.status(200).json(updatedtodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletetodo = await TODOLIST.findByIdAndDelete(id);

    if (!deletetodo) {
      return res.status(404).json({ message: "book not found" });
    }

    res.status(200).json({ message: "book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const filterTodos = async (req, res) => {
    try {
      const status = req.query.status;
      const todos = await TODOLIST.find({ status });
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

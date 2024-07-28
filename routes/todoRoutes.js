import express from "express";
import {
  gettodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  // filterTodos
} from "../controllers/todoControllers.js";

const router = express.Router();

router.get("/todos", gettodos);

router.get("/todos/:id", getTodoById);

router.post("/todos", createTodo);

router.put("/todos/:id", updateTodo);

router.delete("/todos/:id", deleteTodo);

// router.get('/todos/filter', filterTodos);

export default router;

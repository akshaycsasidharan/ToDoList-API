import express from "express";
import {
  gettodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  filterTodos,
} from "../controllers/todoControllers.js";

import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.get("/todos/filter", verifyToken, filterTodos);

router.get("/todos", verifyToken, gettodos);

router.get("/todos/:id", verifyToken, getTodoById);

router.post("/todos", verifyToken, createTodo);

router.put("/todos/:id", verifyToken, updateTodo);

router.delete("/todos/:id", verifyToken, deleteTodo);

export default router;

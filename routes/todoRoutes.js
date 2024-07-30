import express from "express";
import upload from "../middlewares/upload.js";
import {
  gettodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  filterTodos,
  uploadTodos,
  downloadTodos,
} from "../controllers/todoControllers.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

// Define your routes
router.get("/todos/filter", verifyToken, filterTodos);
router.get("/todos", verifyToken, gettodos);
router.get("/todos/:id", verifyToken, getTodoById);
router.post("/todos", verifyToken, createTodo);
router.put("/todos/:id", verifyToken, updateTodo);
router.delete("/todos/:id", verifyToken, deleteTodo);
router.post("/todos/upload", verifyToken, upload.single("file"), uploadTodos);
router.get("/todos/download", verifyToken, downloadTodos);

export default router;

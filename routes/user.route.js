import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/auth.js"; 

const router = express.Router();


router.post("/register", registerUser);

router.post("/login",verifyToken, loginUser);

export default router;

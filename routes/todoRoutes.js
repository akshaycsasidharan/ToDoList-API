import express from "express";
import {
    gettodos,
    createTodos
} from "../controllers/todoControllers.js"

const router = express.Router();


router.get("/",gettodos);

router.post("/",createTodos);



export default router;
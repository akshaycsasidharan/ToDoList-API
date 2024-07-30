import mongoose from "mongoose";

const todolistSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
});

const TODOLIST = mongoose.model("TODOLIST", todolistSchema);

export default TODOLIST;

  

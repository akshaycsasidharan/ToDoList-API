import express from "express";
import mongoose from "mongoose";
import todoRoute from "./routes/todoRoutes.js";
import userRoute from "./routes/user.route.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", todoRoute);
app.use("/api/users", userRoute);


mongoose
  .connect(
    "mongodb+srv://akshaycs0480:E729Uzoc1RyATSdl@cluster0.jtye92s.mongodb.net/"
  )
  .then(() => {
    console.log("connected to dtatabase");
    app.listen(8080, () => {
      console.log("server is running on port 8080");
    });
  })
  .catch((error) => {
    console.log("connection failed", error);
  });

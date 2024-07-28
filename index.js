import express from "express";
import mongoose from "mongoose";
import todoRoute from "./routes/todoRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", todoRoute);

mongoose
  .connect(
    "mongodb+srv://akshaycs0480:mM7hU71gbJgODjSY@todolistdb.9etiaz7.mongodb.net/todolistDB"
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

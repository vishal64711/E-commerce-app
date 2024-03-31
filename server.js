import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connect } from "mongoose";
import connectDB from "./config/db.js";

//configure env
dotenv.config();
// since the .env is in root we do not need to at any path

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white
  );
});

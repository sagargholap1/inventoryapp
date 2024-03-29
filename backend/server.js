import dotenv from 'dotenv';
// const dotenv = require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
dotenv.config()

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(bodyParser.json());

//Routes
app.get('/', (req,res) => {
    res.send("Home Page");
})

const PORT = process.env.PORT || 5000;

//Connect to the MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to LocalHost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });

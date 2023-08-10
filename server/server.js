import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connect from "./database/conn.js";

//configure env
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); // less hackers know about out stack

const PORT = process.env.PORT;

// HTTP GET Request
app.get("/", (req, res) => {
  res.status(201).json("Home GET Request");
});

// Start Server only when we have valid connection
connect()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server connected to http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server ");
    }
  })
  .catch((error) => {
    console.log("Invalid Database Connection...");
  });

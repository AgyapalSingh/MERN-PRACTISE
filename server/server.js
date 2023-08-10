import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

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

// Start Server
app.listen(PORT, () => {
  console.log(`Server connected to http://localhost:${PORT}`);
});

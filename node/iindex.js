import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "./db.js";

const app = express();
const PORT = 8080;
app.use(express.json())
app.use(cors());

app.listen(PORT, () => {
console.log("Server is running on port " + PORT);
});

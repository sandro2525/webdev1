const express = require("express");
const mongoose = require("mongoose");

// mongodb+srv://aleksandremachavariani804_db_user:<db_password>@cluster0.fulrg4y.mongodb.net/

const app = express();
const PORT = 8080;

app.use(express.json());

const mongo_url =
"mongodb+srv://aleksandremachavariani804_db_user:<db_password>@cluster0.fulrg4y.mongodb.net/";

mongoose
.connect(mongo_url)
.then(() => console.log("connected to mongoDB"))
.catch((err) => console.error("error connecting to mongoDB", err));

app.get("/", (req, res) => {
res.send("hello world");
});

app.listen(PORT, () => {
console.log("server is listening on port " + PORT);
});

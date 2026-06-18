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
const userSchema = new mongoose.Schema({
name: { type: String, required: true },
age: { type: Number, required: true },
city : { type: String, required: true },
createdAt: { type: Date, default: Date.now },
});
app.get("/", (req, res) => {
res.send("hello world");
});
app.post("/users", async (req, res) => {
const { name, age, city } = req.body;
constuser = new User({ name, age, city });
await user.save();
res.status(201).json({msg:"successfully created user", user : newUser});
});
app.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json({
        count: users.length,
        data : users
    })
});
const User = mongoose.model("User", userSchema);
app.listen(PORT, () => {
console.log("server is listening on port " + PORT);
});

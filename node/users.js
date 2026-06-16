import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
name: String,
age: Number,
hobbies: [String],
});

export const User = mongoose.model("User", userSchema);
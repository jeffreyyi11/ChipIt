const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email required"]
    },
    username: {
        type: String,
        required: [true, "Username required"],
        minlength: [6, "Username must be at least 6 characters"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [8, "Password must be at least 8 characters"]}
}, {timestamps: true})

module.exports.User = mongoose.model("User", UserSchema); 
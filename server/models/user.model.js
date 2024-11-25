const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        this: String,
        unique: true,
        required: true
    },
    password: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
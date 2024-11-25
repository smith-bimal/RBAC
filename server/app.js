require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require('mongoose');

const authRoutes = require("./routes/Auth.Route.js");

main()
    .then(() => console.log('database connection established'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL)
}

app.get("/", (req, res) => {
    res.send("Homepage");
});

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
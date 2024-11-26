require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/Auth.Route.js");
const memberRoutes = require("./routes/members.route.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

main()
    .then(() => console.log('database connection established'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL)
}

app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000
        }
    })
);

app.get("/", (req, res) => {
    res.send("Server Page");
});

app.use("/api/auth", authRoutes);
app.use("/api/members", memberRoutes);

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
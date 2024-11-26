const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require('../models/user.model');

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(200).json({ message: "SignUp Successful" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Wrong Credentials" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (match) {
            const token = jwt.sign({ email: user.email }, process.env.SECRET);
            req.session.currentUser = user;
            res.cookie("token", token);
            return res.status(200).json({ message: "Login successful" })
        } else {
            return res.status(401).json({ message: "Wrong Credentials" });
        }

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const signOut = (req, res) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).send({ message: 'Unable to logout', err });
            }

            // Clear the token cookie
            res.clearCookie("token", { 
                httpOnly: true, 
                secure: process.env.NODE_ENV === 'production', 
                path: '/',  // Ensure this matches the path where the cookie was set
            });

            res.status(200).send({ message: "Logout successful" });
        });
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).send({ message: 'Unable to log out', error });
    }
};



module.exports = { signUp, signIn, signOut };
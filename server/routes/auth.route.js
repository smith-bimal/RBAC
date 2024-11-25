const express = require("express");
const { signUp, signIn, signOut } = require("../controllers/auth.Controller");
const router = express.Router();

router.post('/signin', signIn)
router.post('/signout', signOut)

module.exports = router;

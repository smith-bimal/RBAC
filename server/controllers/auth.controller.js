const signIn = (req, res) => {
    res.send("SignIn ");
};
const signOut = (req, res) => {
    res.send("SignOut ");
};

module.exports = { signIn, signOut };
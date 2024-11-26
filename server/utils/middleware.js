const jwt = require("jsonwebtoken");

module.exports.verify = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ auth: false, message: "You are not authenticated" });
    } else {
        await jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ auth: false, message: 'Invalid token.' });
            } else {
                req.user = decoded;
                next();
            }
        });
    }
}
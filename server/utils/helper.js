const generateRandomID = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";

    let ID = "";
    for (let i = 0; i < 2; i++) {
        ID += characters[Math.floor(Math.random() * characters.length)];
    }

    for (let i = 0; i < 4; i++) {
        ID += digits[Math.floor(Math.random() * digits.length)];
    }

    return ID;
}

module.exports = { generateRandomID };
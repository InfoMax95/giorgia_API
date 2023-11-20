const jwt = require("jsonwebtoken");
const fs = require("node:fs");

const options = { expiresIn: "100s" };

module.exports = (req, res, next) => {
    // console.log(req.cookies);
    // console.log(req.cookies.token);
    const token = req.cookies.token;
    if (!token) return res.status(401).send("Nessun token fornito");
    try {
        // const pub_key = fs.readFileSync("rsa.pub");
        const payload = jwt.verify(token, process.env.JWT_KEY);
        // console.log(payload);
        // res.send("Il token è valido");
        next();
    } catch(err) {
        res.status(401).send("Il token non è valido oppure è scaduto");
    }
}
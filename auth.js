const fs = require("fs");
const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const checkAuth = require("./middleware/check-auth");

const app = express();
app.use(cookieParser());
// const options = { expiresIn: "100s", algorithm: "RS256" };
const options = { expiresIn: "100s" };

app.get("/login", (req, res) => {
    const expire = 100;
    const payload = { id: 1, isLogged: true };
    const cookieSettings = {
        // maxAge: new Date(Date.now() + 1e5),
        maxAge: expire * 1000,
        httpOnly: true,
        secure: false // solo in sviluppo, perche ora usiamo http ma in prod sarà https
    }
    // const pvt_key = fs.readFileSync("rsa");
    const token = jwt.sign(payload, process.env.JWT_KEY, options);
    res.cookie("token", token, cookieSettings).send();
});

app.get("/user/profile", checkAuth, (req, res) => {
    res.send("sei autenticato");
});

app.get("/user/message", checkAuth, (req, res) => {
    res.send("sei autenticato");
});

app.listen(3000, () => {
    console.log(`Server is listening at port 3000`);
});

const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(cookieParser());

app.get("/login", (req, res) => {
    const payload = { id: 1, isLogged: true };
    const options = { expiresIn: "10s" };
    const token = jwt.sign(payload, process.env.JWT_KEY, options);
    res.cookie("token", token).send();
});

app.get("/user/profile", (req, res) => {
    console.log(req.cookies);
    console.log(req.cookies.token);
    res.send();
});

app.listen(3000, () => {
    console.log(`Server is listening at port 3000`);
});

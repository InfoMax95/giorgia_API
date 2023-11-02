const ErrorHandler = require('../helpers/ErrorHandler');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render("index", {
        intestazione: "home page app",
        info: "applicazione creata con node.js",
        title: "Home page"
    });
});

module.exports = router;
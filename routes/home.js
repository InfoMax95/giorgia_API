const ErrorHandler = require('../helpers/ErrorHandler');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("pagina home");
    throw new ErrorHandler(400, "Richiesta non corretta, dovresti...");
});

module.exports = router;
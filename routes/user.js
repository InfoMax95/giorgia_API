const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("pagina home");

});

module.exports = router;
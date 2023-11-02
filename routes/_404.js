const express = require('express');
const router = express.Router();

router.get('/404', (req, res) => {
    res.send("pagina 404");
});

module.exports = router;
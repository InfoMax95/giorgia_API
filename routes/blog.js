const express = require("express");
const router = express.Router();

router.get("/articoli", (req, res) => {
    res.status(301).redirect("/blog/news");
});

router.get("/news", (req, res) => {
    res.send("Pagina articoli")
});

router.get("/articolo/:titolo", (req, res) => {
    res.send("Pagina articolo")
});

module.exports = router;

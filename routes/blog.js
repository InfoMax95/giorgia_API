const express = require("express");
const router = express.Router();

router.get("/articoli", (req, res) => {
    const articoli = [
        { titolo: "titolo articolo 1", testo: "testo articolo 1" },
        { titolo: "titolo articolo 2", testo: "testo articolo 2" },
        { titolo: "titolo articolo 3", testo: "testo articolo 3" }
    ];
    res.render('articoli', {
        title: "articoli del blog",
        elencoArticoli: articoli
    });
    // res.status(301).redirect("/blog/news"); esempio di redirect
});

router.get("/news", (req, res) => {
    res.send("Pagina articoli");
});

router.get("/articolo/:titolo", (req, res) => {
    res.send("Pagina articolo");
});

module.exports = router;

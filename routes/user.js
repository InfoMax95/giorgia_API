const express = require('express');
const router = express.Router();
const { userAuth, userPerms } = require('../middleware/user-auth');

router.use(userAuth, userPerms);

router.get("/", (req, res) => {
    res.send("Benvenuto");
});

router.get("/user/risorsa-1", (req, res) => {
    res.download("delega.pdf");
    // res.send("ecco a te la risorsa premium");
});

module.exports = router;
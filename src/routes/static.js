const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("Welcome to Bloc");
});

router.get("/marco", (req, res, next) => {
    res.send("polo");
});


module.exports = router;

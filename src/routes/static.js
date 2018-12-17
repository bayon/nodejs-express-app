const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");

router.get("/", staticController.index);
router.get("/about", staticController.about);

/*
OLD WAY before controllers:
router.get("/", (req, res, next) => {
    res.send("Welcome to Bloc");
});
*/


module.exports = router;

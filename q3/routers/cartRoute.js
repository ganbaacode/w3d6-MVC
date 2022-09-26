const express = require("express");
const router = express.Router();
const controller = require("../controllers/cartController");

router.get("/addToCart", controller.showItems);


module.exports = router;
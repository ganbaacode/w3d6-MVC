const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");




router.get("/product", controller.productDisplay);

router.post("/addToCart", controller.addItemToCart);


module.exports = router;
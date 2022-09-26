const prod = require("../models/product");
const cart = require("../models/cart");


exports.productDisplay = (req, res) => {
    const pro = prod.findAll();
    res.render("product", { products: pro });
}

exports.addItemToCart = (req, res) => {
    let item = prod.findById(req.body.myId)[0];
    cart.addToCard(item);
    res.send(String(item));
    // cart.addToCard(item);
    // prod.decreaseQuant(req.body.id);
    console.log(req.body.myId);
    // res.redirect("product");
}
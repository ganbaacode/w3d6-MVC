const product = require("./product");

let cart = null;

module.exports = class cart {

    static addToCard(x) {
        if (cart) {

        } else {
            cart = { products: [], totalPrice: 0 };
            product.quantity = 1;
            cart.products.push(x);
            cart.totalPrice = product.price;
        }
    }

    static getCart() {
        return cart;
    }

}

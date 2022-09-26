const express = require("express");
const path = require("path");
const app = express();
const prodRoute = require("./routers/productRoutes");
const cartRoute = require("./routers/cartRoute");

app.use("/css", express.static(path.join(__dirname, "css")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(prodRoute);
app.use(cartRoute);

app.listen(3000, () => {
    console.log("Server is running...");
});


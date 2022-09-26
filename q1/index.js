const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/css', express.static(path.join(__dirname, "css")));




app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    let myS = "night";
    if (hour > 6 && hour < 18) {
        myS = "day"
    }
    res.render("index", {
        myStyle: myS
    });
});
app.listen(3000);
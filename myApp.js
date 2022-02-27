var express = require('express');
require("dotenv").config();
var path = require("path");
var app = express();
const absolutePath = path.join(__dirname, "public");
// console.log(absolutePath);
app.use("/public", express.static(absolutePath));
// route to serve json
app.get("/json", (req, res) => {
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase();
    }
    res.json({ message: message });
});
// route to landing
app.get('/', (req, res) => {
    // res.send("Hello Express");
    const absolutePath = path.join(__dirname, "/views/index.html");
    res.sendFile(absolutePath);
});


































module.exports = app;

var express = require('express');
require("dotenv").config();
var path = require("path");
var app = express();
const absolutePath = path.join(__dirname, "public");
// console.log(absolutePath);
app.use("/public", express.static(absolutePath));
// middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});
// chained middleware
app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res, next) => {
    res.json({ time: req.time });
});
// route param
app.get("/:word/echo", (req, res) => {
    res.json({ echo: req.params.word });
});
// route query
app.get('/name', (req, res) => {
    res.json({ name: `${req.query.first} ${req.query.last}` });
});
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

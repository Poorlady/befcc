var express = require('express');
var path = require("path");
var app = express();
const absolutePath = path.join(__dirname, "public");
// console.log(absolutePath);
app.use("/public", express.static(absolutePath));
app.get("/json", (req, res) => res.json({ message: "Hello json" }));
app.get('/', (req, res) => {
    // res.send("Hello Express");
    const absolutePath = path.join(__dirname, "/views/index.html");
    res.sendFile(absolutePath);
});


































module.exports = app;

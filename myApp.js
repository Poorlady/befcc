var express = require('express');
var app = express();
app.get('/', (req, res) => {
    // res.send("Hello Express");
    const absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});


































module.exports = app;

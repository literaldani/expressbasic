
var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("conectado");
});

app.listen(process.env.PORT,process.env.IP);
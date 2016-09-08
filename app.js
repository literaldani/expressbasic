
var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hola, este es el inicio del ejercicio");
});

app.get("/speak/:animal", function (req, res) {
    
    res.send(req.params.animal);
});

app.listen(process.env.PORT,process.env.IP);
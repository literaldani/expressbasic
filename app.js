
var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hola, este es el inicio del ejercicio");
});

app.get("/speak/:animal", function (req, res) {
    var sounds ={
        dog: "Woof",
        pig: "Oink",
        cow: "Moo",
        cat: "I hate you"
        };
    
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    
    res.send("The " + animal +  " says " + sound);
    
});

app.get("/repeat/:word/:times", function(req, res) {
    var times = Number(req.params.times);
    var word = req.params.word;
    var result = "";
    for (var i = 0; i < times; i++ ) {
        result += word + " ";
    }
    
    res.send(result);
    
});

app.get("*", function(req, res) {
    res.send("no existe amigo");
});

app.listen(process.env.PORT,process.env.IP);
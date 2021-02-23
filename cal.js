var express = require('express');
var app = express();

var x = 10;
var y = 20;
var added = parseInt(x) + parseInt(y);
var subt = parseInt(x) - parseInt(y);
var multiplya = parseInt(x) * parseInt(y);

app.get('/', function(req, res){
    res.send("Hello world!");
});

app.get('/add', function(req, res){
    res.send("added values: "+added);
});

app.get('/sub', function(req, res){
    res.send("subtraction values: "+subt);
});

app.get('/multiply', function(req, res){
    res.send("multiplied values: "+multiplya);
});

app.listen(3000);

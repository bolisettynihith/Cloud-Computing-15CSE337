var express = require('express');
var app = express();

app.get('/', function(req, res){
	   res.send("Hello world!");
});

app.get('/hai', function(req, res){
	   res.send("You called hai");
});

app.get('/hello', function(req, res){
	   res.send("You called hai");
});

app.listen(3000);

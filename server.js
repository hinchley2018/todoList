//setup
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


//config
//TODO: check if the tutorial guy is letting us use this db
mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev')); //log every request to console
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

//listen
app.listen(8080); //so its the quick and dirty config huh... naughty tutorial guy
console.log("TodoList app listening on port 8080");

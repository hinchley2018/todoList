//imports
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import apiRouter from './api';

const app = express();


//config
//TODO: tutorial isn't letting us use his so we need to replace this
//mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev')); //log every request to console
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());
app.use('/api',apiRouter);

//define model
var Todo = mongoose.model('Todo', {
  text: String
});

//listen
app.listen(8080); //so its the quick and dirty config huh... naughty tutorial guy
console.log("TodoList app listening on port 8080");

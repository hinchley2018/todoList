//imports
import express from 'express';

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

// application -------------------------------------------------------------
app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

//listen
app.listen(8080); //so its the quick and dirty config huh... naughty tutorial guy
console.log("TodoList app listening on port 8080");

import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
const mongoose = mongoose();

//define model
var Todo = mongoose.model('Todo', {
  text: String
});
//NOTE: /api is prepended to all requests in server.js

//get all todos
router.get('/todos', (req, res) => {
  //use mongoose to get todos in db
  Todo.find((err,todo)=>{
    if(err){
      res.send(err);
    }
    res.json(todos);
  });
  res.send({});
});

//create todo and send back all todos after creation
router.post('/todos', (req,res) => {
  //create todo, info comes from AJAX req from Angular
  Todo.create({
    text: req.body.text,
    done: false
  }, function (err,todo) {
    if(err){
      res.send(err);
    }

    //get and return all todos after you create a new one
    Todo.find((err,todos) =>{
      if(err){
        res.send(err);
      }
      res.json(todos);
    });
  });
});

export default router;

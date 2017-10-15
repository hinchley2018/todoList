import express from 'express';

const router = express.Router();

//NOTE: /api is prepended to all requests in server.js

//get all todos
router.get('/todos', (req, res) => {
  res.send({});
});


export default router;

const express = require('express');
const routes = express.Router();
const Todo = require('../models/todo');

routes.get('/todos', (req, res, next) => {
    //return the data from mongoDB to display it in Views
    Todo.find({}, 'action')
        .then(data => res.json(data))
        .catch(next)
});
routes.post('/todos', (req, res, next) => {
    if (req.body.action) {
        Todo.create(req.body)
            .then(data => res.json(data))
            .catch(next);
    }
    else {
        res.json({
            error: "The input field is empty - include action"
        })
    }
});
routes.delete('/todos/:id', (req, res, next) => {
    Todo.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(next)
});

module.exports = routes;
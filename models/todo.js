const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for defining the structure of data
const todoSchema = new Schema({
    action: {
        type: String,
        required:[true, 'The todo text field is required - put something here']
    }
})

//model for storing data in DB
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:hx220903@cluster0.fkjkl0y.mongodb.net/todos')

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
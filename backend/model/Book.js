// import mongoose in order to create a model
const mongoose = require('mongoose');

// before creating a model create a schema
const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    comment: {
        type: String,
    }
})

// use schema to create a model 

const Books = mongoose.model('Book', bookSchema)

module.exports = Books;

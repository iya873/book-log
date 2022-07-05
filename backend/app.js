// import express in order to create express app
const express = require('express');


// import book router
const bookRouter = require('./routes/bookRouter')
// create a variable to hold express methods
const app = express();

//tell express app not to accept nested data
app.use(express.urlencoded({
    extended: false,
}))

// add a body parser
app.use(express.json())

// add path to static files
app.use(expres.static('public'));

// send user to the book router
app.use('/books', bookRouter)



module.exports = app
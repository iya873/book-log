// import express to create routes
const express = require('express');

// import book controller
const bookController = require('../controllers/bookController')



const bookRouter = express.Router();


bookRouter
    .route('/')
    .get(bookController.getAllBooks)
    .post(bookController.createBook)

bookRouter
    .route('/:id')
    .get(bookController.getOneBook)
    .put(bookController.updateBook)
    .delete(bookController.deleteBook)

module.exports = bookRouter;
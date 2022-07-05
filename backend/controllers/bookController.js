const Books = require('../model/Book');
const Book = require('../model/Book')

// const getAllBooks = async (req, res) => {
//      let books;
//     try {
//         books = await Book.find();
//     } catch (err) {
//         console.log(err);
//     }

//     if (!books) {
//         return res.status(404).json({message: 'No products found'})
//     }
//     return res.status(200).json({books})
// }

exports.getAllBooks = async (req, res) => {
    try {
        // retreive all the books in wishlist
        const books = await Book.find();
       // send a response
        res.status(200).json({
            state: 'success',
            result: books.length,
            data: {
                books,
            },
        });
        
    } catch (error) {
        res.status(500).json({
            status: 'error',
            data: {
                error: error.message
            },
        });
    }
};

exports.createBook = async (req, res) => {
    try {
        // create a new book log
        const newBook = await Books.create(req.body);
        //send a respond
        res.status(201).json({
            status: 'success',
            data: {
                newBook,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            error: error.message,
        });
    }
};


exports.getOneBook = async (req, res) => {
    try {
        // retrieve a single book
        const book = await Books.findById(req.params.id);
        // send a response
        res.status(200).json({
            status: 'success',
            data: {
                book,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            error: error.message
        });
    }
};

exports.updateBook = async (req, res) => {
    try {
        //get a single book
        const updateBook = await Books.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        //send a response
        res.status(200).json({
            status: 'success',
            data: {
                updateBook,
            },
        });
    } catch (error) {
        res.status(500).jsoon({
            status: 'error',
            error: error.message,
        });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        //find a single book
        await Books.findByIdAndDelete(req.params.id);
        //send a response
        res.status(204).json({
            status: 'success',
            data: {},
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            error: error.message,
        });
    }
};
// import dotenv module to connect to our config file
const dotenv = require('dotenv')

//import mongoose in order to connect to database
const mongoose = require('mongoose')

//connect to our config.env file
dotenv.config({
    path: './config.env'
})

//import express app
const app = require('./app')

// create a variable that represents our database
const DB = mongoose.connect(process.env.MONGO_DB,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }
)
    .then(() => {
    console.log('Database is connected')
    })
    .catch((err) => {
   console.error(err.message) 
    })

const port = process.env.port

app.listen(port, () => {
    console.log(`Currently listening on port ${port}`)
})
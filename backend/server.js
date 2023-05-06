const express = require('express')
const app = express()
const port = 5000
const colors = require('colors')
const connectDB = require('./config/db')



connectDB()

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(port, ()=> {
    console.log(` App listening on http://localhost:${port}`.blue.underline.bold);
})


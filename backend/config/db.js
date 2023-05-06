const mongoose = require('mongoose')


const connectDB = async() => {
    try {
        const connect = await mongoose.connect('mongodb://127.0.0.1:27017/practice')
        console.log(`MongoDB Connected:${connect.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log("Can't connect to MongoDB !");
        process.exit(1)
    }
}

module.exports = connectDB


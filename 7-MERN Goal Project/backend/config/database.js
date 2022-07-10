const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected Successfully`.cyan.underline)

    }catch(err){
        console.log("Error while connected to MongoDB".red.underline)
        process.exit(1)
    }
}

module.exports = connectDB
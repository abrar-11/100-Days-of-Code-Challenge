const mongoose = require('mongoose')


const goalSchema = new mongoose.Schema({
    goal:{
        type:String,
        required: [true,"Please Provide goal text"]
    }
},{timestamps:true})



module.exports = mongoose.model("Goal",goalSchema)
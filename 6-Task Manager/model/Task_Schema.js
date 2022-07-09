const mongoose  = require('mongoose')

const {Schema} = require('mongoose')


const taskSchema = new Schema({
    name : String,
    completed : Boolean
})


const Task = mongoose.model('Task',taskSchema)

module.exports = Task
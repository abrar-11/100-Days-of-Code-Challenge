 const mongoose = require('mongoose');
 
 const EmployeeSchema = new mongoose.Schema({

    name:{
        type:String,
        unique: true,
        required: true
    },
    email:{
        type:String,
        unique: true,
        required: true
    },
   
    address:{
        type:String,
        required: true
    },
   
    phone:{
        type:String,
        unique: true,
        required: true
    }
 },{timestamps:true});

module.exports = mongoose.model('Employees',EmployeeSchema)
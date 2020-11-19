const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let authSchema = new Schema({
    userId:{
        type:String
    },
    mobileNo:{
        type:Number
    },
    password:{
        type:String
    },
    userType:{
        type:Number
    },
    createdAt:{
        type:Date, default: Date.now
    },
    updatedAt:{
        type:Date,default: Date.now
    }
}) 

module.exports = mongoose.model('authentication',authSchema);	
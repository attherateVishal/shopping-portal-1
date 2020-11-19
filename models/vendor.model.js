const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let vendorSchema = new Schema({

    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    mobileNo:{
        type:Number
    },
    city:{
        type:String
    },
    stateName:{
        type:String
    },
    country:{
        type:String
    },
    address:{
        type:String
    },
    password:{
        type:String
    }
	
});

module.exports = mongoose.model('vendorSchema',vendorSchema);	
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let customerSchema = new Schema({

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
    zip:{
        type:Number
    },
    address:{
        type:String
    }
	
});

module.exports = mongoose.model('customer',customerSchema);	
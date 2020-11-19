const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let practiseSchema = new Schema({
	description:{
		type:String
	},
	price:{
		type:Number
	},
	img:[{
		data:Buffer,cotentType:String
	}],
	vendorId:{
		type:String
	}	
	
});

module.exports = mongoose.model('practiseschemas',practiseSchema);	
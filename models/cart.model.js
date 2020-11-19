const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let cartSchema = new Schema({
	userData:{},
	cartData:[{}],
	total:{
		type:Number
	},
	vendorId:{type:String},
	created: { type: Date, default: Date.now },
	updated: { type: Date, default: Date.now }	
	
});

module.exports = mongoose.model('cart',cartSchema);	
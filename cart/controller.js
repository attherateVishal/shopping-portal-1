let cartSchema  = require('../models/cart.model');
let cart = {};
let Login = require('../auth/controller');

cart.placeOrder = async (req,res)=>{
	console.log(req.body);
	await Login.userRegister(req.body.userData)
	console.log("after the auth in cart");
	
	let cartSchemad = new cartSchema(req.body);
    cartSchemad.save()
	.then(todo=>{
		
		res.status(200).json({'body':'order placed successfully'});
	})
	.catch(err=>{
		res.status(400).send('Failed, Try again later');
	})
}

cart.getOrders = (req,res)=>{
	cartSchema.find(function(err,orders){
		if(err){
			console.log(err)
		}else{			
			res.status(200).json(orders);			
		}
	})
} 

module.exports = cart;
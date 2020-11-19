const authSchema = require("../models/auth.model") 
const customerSchema = require("../models/customer.model.js")

let Login = {};
//userType = 1 - vendor, 2- customer
Login.userLogin = (req,res)=>{
    console.log(req.body);
    
	// console.log(loginData);
	// console.log(req.files);
	// for(var y=0;y<req.files.length;y++){
	// 	var img = fs.readFileSync(req.files[y].path)	
	// 	practise.img.push({data:img,contentType:req.files[y].mimetype});		
	// }	
	authSchema.findOne({"mobileNo":req.body.mobileNo},function (err, adventure) {console.log(adventure)})
	.then(todo=>{
		console.log(todo);
		if(todo.password==req.body.password){
			res.status(200).json({'message':'logged in successfully',body:todo});
		}else{
			res.status(400).json({'vendor':'Incorrect password'});
		}
		
	})
	.catch(err=>{
		res.status(400).send('Something went worng');
	})
}

Login.userRegister = (req,res)=>{
	console.log(req.body);
	let customerSchemad = new customerSchema(req);
	
    customerSchemad.save()
	.then(response=>{
		
		let authSchemad = new authSchema({userId:response._id,mobileNo:req.mobileNo,password:'123',userType:2})
		authSchemad.save().then(response=>{
			console.log("customer added");
			return true;
		}).catch(err=>{
			res.status(400).send('can not create login');
		})

		// res.status(200).json({'body':'order placed successfully'});
	})
	.catch(err=>{
		res.status(400).send('can not create user');
	})
}



module.exports = Login;
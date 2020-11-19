const vendorSchema = require("../models/vendor.model"); 
const authSchema = require("../models/auth.model");


let Vendor = {};

Vendor.addVendor = (req,res)=>{
    console.log(req.body);
    let vendorData = new vendorSchema(req.body);
	// console.log(req.body);
	// console.log(req.files);
	// for(var y=0;y<req.files.length;y++){
	// 	var img = fs.readFileSync(req.files[y].path)	
	// 	practise.img.push({data:img,contentType:req.files[y].mimetype});		
    // }
    	
	vendorData.save()
	.then(response=>{
        console.log(response)
		res.status(200).json({'vendor':'data added successfully'});
    let authData = new authSchema({userId:response._id,mobileNo:req.body.mobileNo,password:req.body.password,userType:1});
    authData.save().then(res=>{
        console.log(res);

    }).catch(err=>{
        console.log(err);
    })
    })
	.catch(err=>{
		res.status(400).send('adding new data failed');
	})
}

module.exports = Vendor;
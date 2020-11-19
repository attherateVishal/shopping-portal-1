let practiseSchema = require('../models/practise.model');
let product = {};
var fs = require('fs');
// var multer = require("multer");

product.getList = (req,res)=>{
	practiseSchema.find({"vendorId":"5ec112825dbd304670d8a8bd"},function(err,practises){
		if(err){
			console.log(err)
		}else{			
			res.json(practises);			
		}
	})
} 

product.addItem = (req,res)=>{
	let practise = new practiseSchema(req.body);
	console.log(req.body);
	console.log(req.files);
	for(var y=0;y<req.files.length;y++){
		var img = fs.readFileSync(req.files[y].path)	
		practise.img.push({data:img,contentType:req.files[y].mimetype});		
	}	
	practise.save()
	.then(todo=>{
		res.status(200).json({'practise':'data added successfully'});
	})
	.catch(err=>{
		res.status(400).send('adding new data failed');
	})
}

product.uploadImage = (req,res)=>{
        console.log(req.files);
    var newItem = new practiseSchema();
    var img = fs.readFileSync(req.files[0].path)
    // var encode_image = img.toString('base64');
    // newItem.img.data = new Buffer(img, 'base64');
    newItem.img.data = img;
    newItem.img.contentType = req.files[0].mimetype;

    newItem.save();
    }

product.deleteItem = (req, res)=>{
    console.log("this is delete request");   
    console.log(req);
    practiseSchema.findByIdAndRemove({_id: req.params.id}, function(err, practise){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
}

module.exports = product;
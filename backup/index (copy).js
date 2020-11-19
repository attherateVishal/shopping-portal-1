const express = require('express');
const app = express();
var fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;
const mongoose = require('mongoose');
var multer = require("multer");
const practiseRoutes = express.Router();



let practiseSchema = require('./practise.model');

app.use(cors());

app.use(bodyParser.json());

app.use(multer({ dest: __dirname+'./uploads/'}).any());


mongoose.connect('mongodb://127.0.0.1:27017/practise',{useNewUrlParser:true});

const connection = mongoose.connection;

connection.once('open',function(){
	console.log("MongoDB database connection established successfully");
})


practiseRoutes.route('/').get(function(req,res){
	practiseSchema.find(function(err,practises){
		if(err){
			console.log(err)
		}else{
			var check = false;
			var obj;
			// console.log(practises);
			console.log("000000000000000000000000000000000");
			// practises.forEach(function(item){
			// 	item = item.toObject();
			
			// 	if (item.hasOwnProperty('img')){
			// 		console.log(item);
			// 		check = true;
			// 		obj = item;
			// 	}
			// })
			// if(check){
			// 	res.contentType('image/jpeg');
			// 	console.log("----------------------------");
			// 	console.log(obj.img.data);
			// 	console.log("----------------4444444444444444444444444444---------------");
			// 	console.log(obj.img.data.buffer);
			// 	res.send(JSON.stringify(obj.img.data.buffer))
			// }else{
			// 	res.json(practises);
			// }
			res.json(practises);			
		}
	})
})

practiseRoutes.route('/add').post(function(req,res){
	let practise = new practiseSchema(req.body);
	console.log(req);
	console.log("--------------------");
	console.log(practise);
	console.log("--------------------");
	console.log(JSON.stringify(req.body.myImage1));
	console.log("==========");
	console.log(req.body.myImage1);
	
	var img = fs.readFileSync(req.files[0].path)
	// var encode_image = img.toString('base64');
	// newItem.img.data = new Buffer(img, 'base64');
	practise.img.data = img;
	practise.img.contentType = req.files[0].mimetype;

	practise.save()
	.then(todo=>{
		res.status(200).json({'practise':'data added successfully'});
	})
	.catch(err=>{
		res.status(400).send('adding new data failed');
	})
})




   practiseRoutes.route('/upload').post(function(req,res){
	   console.log(req.files);
	var newItem = new practiseSchema();
	var img = fs.readFileSync(req.files[0].path)
	// var encode_image = img.toString('base64');
	// newItem.img.data = new Buffer(img, 'base64');
	newItem.img.data = img;
	newItem.img.contentType = req.files[0].mimetype;

	newItem.save();
   });

   practiseRoutes.route('/delete/:id').get(function (req, res) {
	console.log("this is delete request");   
	console.log(req);
    practiseSchema.findByIdAndRemove({_id: req.params.id}, function(err, practise){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});



app.use('/practises',practiseRoutes);


app.listen(port,function(){
	console.log("listening on port "+port);

});
const express = require('express');
const app = express();
var fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;
const mongoose = require('mongoose');
var multer = require("multer");
// const practiseRoutes = express.Router();
const jwt = require('jsonwebtoken');

const product = require('./product/routes');

// let practiseSchema = require('./practise.model');

app.use(cors());

app.use(bodyParser.json());

app.use(multer({ dest: __dirname+'./uploads/'}).any());


mongoose.connect('mongodb://127.0.0.1:27017/practise',{useNewUrlParser:true});

const connection = mongoose.connection;

connection.once('open',function(){
	console.log("MongoDB database connection established successfully");
})

// app.use("/",products);

// practiseRoutes.route('/').get(function(req,res){
// 	practiseSchema.find(function(err,practises){
// 		if(err){
// 			console.log(err)
// 		}else{			
// 			res.json(practises);			
// 		}
// 	})
// })

// practiseRoutes.route('/add').post(function(req,res){
// 	let practise = new practiseSchema(req.body);
// 	console.log(req.body);
// 	console.log(req.files);
// 	for(var y=0;y<req.files.length;y++){
// 		var img = fs.readFileSync(req.files[y].path)	
// 		practise.img.push({data:img,contentType:req.files[y].mimetype});		
// 	}	
// 	practise.save()
// 	.then(todo=>{
// 		res.status(200).json({'practise':'data added successfully'});
// 	})
// 	.catch(err=>{
// 		res.status(400).send('adding new data failed');
// 	})
// })

//    practiseRoutes.route('/upload').post(function(req,res){
// 	   console.log(req.files);
// 	var newItem = new practiseSchema();
// 	var img = fs.readFileSync(req.files[0].path)
// 	// var encode_image = img.toString('base64');
// 	// newItem.img.data = new Buffer(img, 'base64');
// 	newItem.img.data = img;
// 	newItem.img.contentType = req.files[0].mimetype;

// 	newItem.save();
//    });

//    practiseRoutes.route('/delete/:id').get(function (req, res) {
// 	console.log("this is delete request");   
// 	console.log(req);
//     practiseSchema.findByIdAndRemove({_id: req.params.id}, function(err, practise){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });


app.use('/practises',product);


app.listen(port,function(){
	console.log("listening on port "+port);

});
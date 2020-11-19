const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;
const mongoose = require('mongoose');
mongoose.pluralize(null);

var multer = require("multer");

const jwt = require('jsonwebtoken');
const product = require('./product/routes');
const vendor = require('./vendor/routes');
const auth = require('./auth/routes');
const cart = require('./cart/routes');


app.use(cors());
app.use(bodyParser.json());
app.use(multer({ dest: __dirname+'./uploads/'}).any());

mongoose.connect('mongodb://127.0.0.1:27017/practise',{useNewUrlParser:true});

const connection = mongoose.connection;
connection.once('open',function(){
	console.log("MongoDB database connection established successfully");
})

app.use('/auth',auth);
app.use('/practises',product);
app.use('/vendor',vendor);
app.use('/cart',cart);

app.listen(port,function(){
	console.log("listening on port "+port);
});
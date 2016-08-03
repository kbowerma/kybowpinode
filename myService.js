var http = require('http'); var express = require('express');
var app = express();
var GPIOCtrl = require('./GPIOcontroller.js');
app.get('/unlock/', function(req, res){
	 GPIOCtrl.unlockRelay();
	//GPIOCtrl.say();
	console.log('unlock url called');
	//return "hello"
 });
app.listen(3000);
console.log('App Server running at port 3000');

var http = require('http'); var express = require('express');
var app = express();
var GPIOCtrl = require('./GPIOcontroller.js');
app.get('/unlock/', function(req, res){
	 GPIOCtrl.unlockRelay();
	 res.send('done');
	console.log('unlock url called from myservice');
 });

 app.get('/turnon/', function(req, res){
 	 GPIOCtrl.turnOn();
 	 res.send('turnOn');
 	console.log('turnOn url called from myservice');
  });

	app.get('/turnoff/', function(req, res){
		GPIOCtrl.turnOff();
		res.send('turnOff');
	 console.log('turnOff url called from myservice');
	 });
	 app.get('/write/:pin/:requestedState', function(req, res){
		 GPIOCtrl.mywrite(req,res);
		console.log('write url called from myservice');
		});
		app.get('/read/:pin/', function(req, res){
			GPIOCtrl.myread(req,res);
		 console.log('read url called from myservice');
		 });
		 app.get('/toggle/:pin/', function(req, res){
			 GPIOCtrl.mytoggle(req,res);
			console.log('toggle url called from myservice');
			});

app.listen(3000);
console.log('App Server running at port 3000');

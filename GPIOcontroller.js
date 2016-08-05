var gpio = require("pi-gpio");
var gpioPin = 33;
var isOpened=false;



var unlockRelay = function(){

		gpio.open(gpioPin, "output");

	//if(!isOpened){
	/* Open the door lock */
		gpio.write(gpioPin, 1, function() {
		isOpened = true;
		console.log('unlockRelay called');
		});
	/*setTimeOut will be activated in 2 seconds, closing the lock as we set gpioPin value to 0*/
		setTimeout(function () {
		 gpio.write(gpioPin, 0, function() {
		isOpened = false;
		});
		}, 2000);
	  //  }
}
 module.exports.unlockRelay = unlockRelay;

var turnOn = function(){
	gpio.open(gpioPin, "output");
	gpio.write(gpioPin, 1, function(){
		console.log("pin " + gpioPin + " turnOn called");
	});
}
 module.exports.turnOn = turnOn;

var turnOff = function(){
	gpio.open(gpioPin, "output");
	gpio.write(gpioPin, 0, function(){
		console.log("pin " + gpioPin + " turnOff called");
	});
}
 module.exports.turnOff = turnOff;

var mywrite = function(req,res){
	console.log("the params are: " + JSON.stringify(req.params,null,2));
	//gpio.open(params.pin, "output");
	var reqState = parseInt(req.params.requestedState);
	gpio.write(req.params.pin, reqState , function(){
		console.log("pin " + req.params.pin + " " + reqState + " called");
		myResponse = req.params;
		myResponse.comment = "this is my comment"
		gpio.read(req.params.pin, function(err,value){
			//console.log("inside the read call back myResponse is " + JSON.stringify(myResponse));
			//console.log("inised the read callback the value is " + value)
			myResponse.readValue = value;
			res.send(myResponse)
		})
	});
}
 module.exports.mywrite = mywrite;

 var mytoggle = function(req,res){
 		gpio.read(req.params.pin, function(err,value){
			var newValue = +! value;
			gpio.write(req.params.pin, newValue, function(){
				res.send("toggled to " + newValue )
			} )
 		})
 	};

  module.exports.mytoggle = mytoggle;

 var myread = function(req,res){
	 gpio.read(req.params.pin, function(err,value){
		 //console.log("inside the read call back myResponse is " + JSON.stringify(myResponse));
		 //console.log("inised the read callback the value is " + value)
		 var myResponse = req.params;
		 myResponse.readValue = value;
		 res.send(myResponse)
	 });
 }
module.exports.myread = myread

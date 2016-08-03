//dustin edit 2
var GPIO = require('onoff').Gpio;
var ledOut = new GPIO(13, 'out');
var ledIn = ledOut; //new GPIO(13, 'in'); //CWD-- praps this is dumb
var state = 3;
var ON=1;
var OFF=0;

var fWriteCB=function(err){
	console.log('executed write');
	
	if(err){
		console.log('however, an error occured during write: ',err);
	}
};

function toggle(err,val) {
	state =  val;
	console.log('state is currently: ' + state );
	
	if(err){
		console.log('egads! an error! ', err);
	}
	
	if ( state  == ON ) {
		console.log('turn it  off');
		ledOut.write(OFF,fWriteCB)
		
	} else if ( state == OFF) {
		console.log('turning on');
		ledOut.write(ON,fWriteCB);
		
	} else {
		console.log('Well this is embarrsing. I dunno what to make of this.');
	}

 }

console.log('Synchronous read: ' + ledIn.readSync());
console.log('Asynchronous read: ');
ledIn.read(toggle);



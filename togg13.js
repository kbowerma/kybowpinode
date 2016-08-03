var GPIO = require('onoff').Gpio;
var ledOut = new GPIO(13, 'out');
var ledIn = new GPIO(13, 'in');
var state = 3;
var ON=1;
var OFF=0;

function toggle(err,val) {
	state =  val;
	console.log('state is currently: ' + state );
	
	if(err){
		console.log('egads! an error! ', err);
	}
	
	if ( state  == ON ) {
		ledOut.write(OFF)
		console.log('turn it  off');
	} else if ( state == OFF) {
		ledOut.write(ON);
		console.log('turning on');
	} else {
		console.log('Well this is embarrsing. I dunno what to make of this.');
	}

 }

console.log('Synchronous read: ' + ledIn.readSync());
console.log('Asynchronous read: ');
ledIn.read(toggle);



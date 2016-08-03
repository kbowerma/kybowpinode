var GPIO = require('onoff').Gpio;
var ledOut = new GPIO(13, 'out');
var ledIn = new GPIO(13, 'in');
var state = 3;
var ON=1;
var OFF=0;

function toggle(st) {
	state =  st;
	console.log('state is currently: ' + state );
	
	if ( state  == ON ) {
		ledOut.write(OFF)
		console.log('turn it  off');
	}
	
	if ( state == OFF) {
		ledOut.write(ON);
		console.log('turring on');
	}

 }

console.log('before the state of 13 is ' + ledIn.readSync());

ledIn.read(toggle);



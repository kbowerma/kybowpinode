var GPIO = require('onoff').Gpio;
var led = new GPIO(13, 'out');
var state = 3;

function toggle(st) {
	state =  st
	console.log('state is ' + state );
	if ( state  == 0 ) {
		 led.write(0)
		console.log('turn it  off');
	}
	if ( state == 0) {
	console.log('state is ' + state );
		led.write(1);
		console.log('turring on');
	}

 }

console.log('before the state of 13 is ' + led.readSync());

led.read(toggle)

console.log('after  the state of 13 is ' + led.readSync());


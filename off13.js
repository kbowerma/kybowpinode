var GPIO = require('onoff').Gpio;
var led = new GPIO(13, 'out');

function turnon(err,state) {
	led.writeSync(0)
}

turnon();



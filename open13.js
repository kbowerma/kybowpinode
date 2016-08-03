var gpio = require("pi-gpio");

gpio.open(13, "output");  // opens but does nto create the file:   /sys/class/gpio/gpio13/value 
console.log('pin 13 opened')

// gpio.close(13);
// console.log('pin 13 closed');

// gpio.open(13, "output", function(err) {		// Open pin 13 for output
//     gpio.write(13, 1, function() {			// Set pin 13 high (1)
//         gpio.close(13);						// Close pin 16
//     });
// });

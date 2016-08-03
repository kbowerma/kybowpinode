var gpio = require("pi-gpio");

// gpio.open(13, "output");  // opens but does nto create the file:   /sys/class/gpio/gpio13/value
// console.log('pin 13 opened')

// gpio.close(13);
// console.log('pin 13 closed');



gpio.open(33, "output", function(err) {		// Open pin 13 for output

    // gpio.read(33, function(err, value) {
    //     if(err) throw err;
    //     console.log('13 value is: ' + value);	// The current state of the pin
    // });
    gpio.write(33, 1, function() {			// Set pin 13 high (1)
        gpio.close(33);						// Close pin 16
        console.log(' gonna closed this bitch')
    });
});

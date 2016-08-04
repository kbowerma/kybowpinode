var gpio = require("pi-gpio");

var pin = 33;
var value = 1;



gpio.open(33, "output", function(err) {		// Open pin 13 for output

    // gpio.read(33, function(err, value) {
    //     if(err) throw err;
    //     console.log('13 value is: ' + value);	// The current state of the pin
    // });
    setInterval(function() {
      gpio.write(pin, value, function() {			// Set pin 13 high (1)
          //gpio.close(33);						// Close pin 16
      console.log(' gonna ' + value + 'this pin ' + pin)
      value = +!value;
      });

    }, 1000);

});

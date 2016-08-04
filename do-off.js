var gpio = require("pi-gpio");

var pin = 33;
var value = 0;


// if it is already open it will throw an error but it will still work
gpio.open(pin, "output", function(err) {		// Open pin 13 for output
  console.log('I will now turn offs')
  gpio.write(pin, value)
});

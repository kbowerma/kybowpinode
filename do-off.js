var gpio = require("pi-gpio");

if (process.argv.length <= 2) {
  var pin = 33;
  console.log('you did not give me a pin so I will use 33')
} else var pin = process.argv[2];   // was 33

var value = 0;


// if it is already open it will throw an error but it will still work
gpio.open(pin, "output", function(err) {		// Open pin 13 for output
  console.log('I will now turn offs')
  gpio.write(pin, value)
});

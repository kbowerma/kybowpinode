var gpio = require("pi-gpio");


var value = 1;

if (process.argv.length <= 2) {
  var pin = 33;
  console.log('you did not give me a pin so I will use 33')
} else var pin = process.argv[2];   // was 33

// if it is already open it will throw an error but it will still work
gpio.open(pin, "output", function(err) {		// Open pin 13 for output

  gpio.read(pin, function(err, value) {
     console.log('the value was ' + value );
      value = +!value;
      console.log('I will now set it to '+  value)
        gpio.write(pin, value)
  });
});

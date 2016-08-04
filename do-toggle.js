var gpio = require("pi-gpio");

var pin = 33;
var value = 1;


// if it is already open it will throw an error but it will still work
gpio.open(pin, "output", function(err) {		// Open pin 13 for output

  gpio.read(pin, function(err, value) {
     console.log('the value was ' + value );
      value = +!value;
      console.log('I will now set it to '+  value)
        gpio.write(pin, value)
  });
});

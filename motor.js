var gpio = require("pi-gpio");

function motor1(){
  gpio.write(13, 1, function(err){
  //if err
  console.log("sent 1");
  });
}

function motor2(){
  gpio.write(11, 1, function(err){
  console.log("sent...");
  });
}
gpio.open(13);
//gpio.open(11);

motor1();
//motor2();

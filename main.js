// The Kelvin Project

//The const Kelvin will remain the same
const Kelvin = 0;

//The variable celcisus is equal to the kelvin value minust 273
var Celcius = (Kelvin - 273);

//The line beliw calculates degree Fahrenheit using the Celcius value
var TEMPERATURE = (Celcius * (9/5) + 32);

//Fahrenheit calculation rounded down
TEMPERATURE = Math.floor(TEMPERATURE);

console.log(`The temperature is ${TEMPERATURE} degrees Fahrenheit`)

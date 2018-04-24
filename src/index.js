const $ = require('jquery');  // this will look for jQuery inside `node_modules`

const product = require('./data.js');

// const math = require('./math.js'); // import the module as an object
const {pow, sqrt} = require('./math.js');

// console.log(math.pow(2, 10)); // use the module as an object
console.log(pow(2, 10));
// console.log(math.sqrt(2)); // use the module as an object
console.log(sqrt(2));

console.log(product);

const sayHello = () => console.log("Hi, everybody!");

sayHello();

$("body").css("background-color", "salmon");

$("body").append("<h1>Happy NPM Day, everybody!</h1>");

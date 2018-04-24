const $ = require('jquery');  // this will look for jQuery inside `node_modules`

// const product = require('./data.js');
import product  from './data.js';

// const math = require('./math.js'); // import the module as an object
// import math from './math.js';
import math from './math.js';
import {sum} from './math.js';

import buildRowFrom from './row-builder.js';

import sayHello from './say-hello.js';
console.log(sayHello());

console.log(sum(10, 8));

// console.log(math.pow(2, 10)); // use the module as an object
console.log(math.pow(2, 10));
// console.log(math.sqrt(2)); // use the module as an object
console.log(math.sqrt(2));

console.log(product);

// const sayHello = () => console.log("Hi, everybody!");

// sayHello();

$("body").css("background-color", "salmon");

$("body").append("<h1>Happy NPM Day, everybody!</h1>");

$('#add-product').click((event) => {
    event.preventDefault();
    // input
    const name = $('#name').val();
    const price = $('#price').val();

    const productRow = buildRowFrom(name, price); // process

    $('tbody').append(productRow); // output
});

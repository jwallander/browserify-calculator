var add = require('./modules/add.js');
var subtract = require('./modules/subtract.js');
var multiply = require('./modules/multiply.js');
var divide = require('./modules/divide.js');

console.log("1 + 2 = " + add(1,2)); // 3
console.log("3 - 1 = " + subtract(3,1)); // 2
console.log("3 x 4 = " + multiply(3,4)); // 12
console.log("12 ÷ 3 = " + divide(3,12)); // 4

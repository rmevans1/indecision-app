"use strict";

//ES5 Function
var square = function square(x) {
    return x * x;
};

//ES6 Arrow Function
var squareArrow = function squareArrow(x) {
    return x * x;
};

//Arrow function expression syntax
var squareArrow2 = function squareArrow2(x) {
    return x * x;
};

console.log(square(8));
console.log(squareArrow(9));
console.log(squareArrow2(4));

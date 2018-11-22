'use strict';

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

var getFirstName = function getFirstName(name) {
    return name.split(' ')[0];
};

var getFirstName2 = function getFirstName2(name) {
    return name.split(' ')[0];
};

console.log(square(8));
console.log(squareArrow(9));
console.log(squareArrow2(4));
console.log(getFirstName('Robert Evans'));
console.log(getFirstName('Andrew Mead'));

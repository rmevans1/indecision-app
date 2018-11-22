//ES5 Function
const square = function (x) {
    return x * x;
}

//ES6 Arrow Function
const squareArrow = (x) => {
    return x * x;
}

//Arrow function expression syntax
const squareArrow2 = (x) => x * x;

const getFirstName = (name) => {
    return name.split(' ')[0];
}

const getFirstName2 = (name) => name.split(' ')[0];


console.log(square(8));
console.log(squareArrow(9));
console.log(squareArrow2(4));
console.log(getFirstName('Robert Evans'));
console.log(getFirstName('Andrew Mead'));
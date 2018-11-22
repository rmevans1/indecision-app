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

console.log(square(8));
console.log(squareArrow(9));
console.log(squareArrow2(4));
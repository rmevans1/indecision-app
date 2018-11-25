// import '.\\utils.js';
import subtract, { square, add } from '.\\utils.js';
import isSenior, { isAdult, canDrink } from '.\\person.js';

console.log('app.js is running');
console.log(square(4));
console.log(add(100, 23));
console.log(subtract(100, 81));

console.log('Is Adult: ', isAdult(18));
console.log('Is Adult: ', isAdult(7));
console.log('Can Drink: ', canDrink(21));
console.log('Can Drink: ', canDrink(9));
console.log('Is Senior: ', isSenior(66));
console.log('Is Senior: ', isSenior(25));
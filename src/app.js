// import '.\\utils.js';
import { square, add } from '.\\utils.js';
import { isAdult, canDrink } from '.\\person.js';

console.log('app.js is running');
console.log(square(4));
console.log(add(100, 23));

console.log('Is Adult: ', isAdult(18));
console.log('Is Adult: ', isAdult(7));
console.log('Can Drink: ', canDrink(21));
console.log('Is Adult: ', isAdult(9));
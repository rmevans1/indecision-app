'use strict';

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = 'Jen';
nameLet = 'Julie';
//let nameLet = 'Julie'; //not ok
console.log('nameLet', nameLet);

var nameConst = 'Frank';
//nameConst = 'Gunther'; // not ok
console.log('nameConst', nameConst);

//Function Scope
// Variables are only accessible from inside the function
function getPetName() {
    var petName = 'Hal';
    return petName;
}

var petName = getPetName();
console.log(petName);

//Block Scoping
var fullName = 'Robert Evans';
var firstName = void 0;;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

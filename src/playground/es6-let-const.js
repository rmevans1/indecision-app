var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
//let nameLet = 'Julie'; //not ok
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//nameConst = 'Gunther'; // not ok
console.log('nameConst', nameConst);

//Function Scope
// Variables are only accessible from inside the function
function getPetName() {
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block Scoping
const fullName = 'Robert Evans'
let firstName;;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
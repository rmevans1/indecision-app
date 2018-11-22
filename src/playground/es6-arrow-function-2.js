// arguments object -no longer bound with arrow functions

const add = function(a, b) {
    console.log(arguments);
    return a + b;
}
console.log(add(55,1));

const add2 = (a,b) => {
    // console.log(arguments); // no go in arrow function
    return a + b;
}
console.log(add2(99, 1));

//this keyword - no longer bound

const user = {
    name: 'Robert',
    cities: ['Waldorf', 'Myrtle Beach'],
    printPlacesLived: function () {
        const that = this;

        this.cities.forEach(function(city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();

const user2 = {
    name: 'Robert',
    cities: ['Waldorf', 'Myrtle Beach'],
    printPlacesLived() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

user2.printPlacesLived();

const user3 = {
    name: 'Robert',
    cities: ['Waldorf', 'Myrtle Beach'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user3.printPlacesLived());

//Challenge area
const multiplier = {
    //numbers - array of numbers
    //multiplyBy - single number
    //multiply - numbers that have been multiplied
    numbers: [5, 10, 15, 20],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
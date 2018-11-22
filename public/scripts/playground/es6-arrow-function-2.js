'use strict';

// arguments object -no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

var add2 = function add2(a, b) {
    // console.log(arguments); // no go in arrow function
    return a + b;
};
console.log(add2(99, 1));

//this keyword - no longer bound

var user = {
    name: 'Robert',
    cities: ['Waldorf', 'Myrtle Beach'],
    printPlacesLived: function printPlacesLived() {
        var that = this;

        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();

var user2 = {
    name: 'Robert',
    cities: ['Waldorf', 'Myrtle Beach'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    }
};

user2.printPlacesLived();

var user3 = {
    name: 'Robert',
    cities: ['Waldorf', 'Myrtle Beach'],
    printPlacesLived: function printPlacesLived() {
        var _this2 = this;

        return this.cities.map(function (city) {
            return _this2.name + ' has lived in ' + city;
        });
    }
};

console.log(user3.printPlacesLived());

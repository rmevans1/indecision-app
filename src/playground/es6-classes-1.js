
class Person {
    constructor(name = 'Anonymous', age = 0) { //es6 allows defaults
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        //return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${ this.name }!`; //template string uses backticks (`)
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}


const me = new Person('Robert Evans', 29);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());

const me2 = new Student('Robert Evans', 29, 'Computer Science');
console.log(me2.hasMajor());
console.log(me2.getDescription());

const other2 = new Student();
console.log(other2.hasMajor());
console.log(other2.getDescription());

const me3 = new Traveler('Robert Evans', 29, 'Myrtle Beach');
console.log(me3.hasHomeLocation());
console.log(me3.getGreeting());

const other3 = new Traveler();
console.log(other3.hasHomeLocation());
console.log(other3.getGreeting());
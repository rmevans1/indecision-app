
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
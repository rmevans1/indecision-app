
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

const me = new Person('Robert Evans', 29);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());
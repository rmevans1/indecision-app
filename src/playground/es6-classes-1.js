
class Person {
    constructor(name = 'Anonymous') { //es6 allows defaults
        this.name = name;
    }
    getGreeting(){
        //return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${ this.name }!`;
    }
}

const me = new Person('Robert Evans');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());
class Person {
    constructor(name, age) {
        this.name;
        this.age;
    }
}

var greeting = function () {
    console.log(`My name is ${this.name} and i\'m ${this.age} old`);
}

module.exports = Person;

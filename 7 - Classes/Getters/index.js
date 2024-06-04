"use strict";
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const pedro_teodorio = new Person("Pedro", "Teodorio");
console.log(pedro_teodorio.fullName); // Pedro Teodorio

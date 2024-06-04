"use strict";
class Animal {
    move() {
        console.log('andando pela terra ...');
    }
}
class Dog extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    makeSound() {
        console.log('Au Au');
    }
}
const cristal = new Dog('Cristal');
cristal.makeSound();
cristal.move();

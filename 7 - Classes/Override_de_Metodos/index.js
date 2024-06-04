"use strict";
class Base {
    someMethod() {
        console.log('Esse é o método da classe Base');
    }
}
class Derived extends Base {
    // Sobrescrevendo o método someMethod da classe Base
    someMethod() {
        console.log('Esse é o método da classe Derived');
    }
}
const derived = new Derived();
derived.someMethod(); // Derived

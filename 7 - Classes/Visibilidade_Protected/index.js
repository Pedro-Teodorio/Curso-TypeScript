"use strict";
class E {
    constructor() {
        this.x = 10;
        this.y = 20;
    }
}
const eInstance = new E();
class F extends E {
    sum() {
        return this.x + this.y;
    }
}
const fInstance = new F();
// console.log(fInstance.x); // Erro de compilação - Property 'x' is protected and only accessible within class 'E' and its subclasses.
console.log(fInstance.sum()); // 30

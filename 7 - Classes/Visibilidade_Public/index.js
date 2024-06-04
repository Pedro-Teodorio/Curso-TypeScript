"use strict";
class C {
    constructor() {
        this.x = 10; // public é o padrão
    }
}
const cInstance = new C();
console.log(cInstance.x); // 10

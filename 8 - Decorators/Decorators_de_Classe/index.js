"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function classDecorator(constructor) {
    if (constructor.name === "Users_1") {
        console.log("Criando usuário...");
    }
}
let Users_1 = class Users_1 {
    constructor(name) {
        this.name = name;
    }
};
Users_1 = __decorate([
    classDecorator
], Users_1);
const pedro_lucas = new Users_1("Pedro Lucas");
console.log(pedro_lucas.name); // Pedro Lucas

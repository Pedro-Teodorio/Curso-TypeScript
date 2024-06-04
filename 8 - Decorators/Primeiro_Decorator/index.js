"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log("Iniciando o decorator...");
    return function (target, key, descriptor) {
        console.log("Executando o decorator...");
        console.log(target);
        console.log(key);
        console.log(descriptor);
    };
}
class ClassDecorators {
    testing() {
        console.log("Terminando a execução da classe...");
    }
}
__decorate([
    myDecorator()
], ClassDecorators.prototype, "testing", null);
const myObj = new ClassDecorators();
myObj.testing(); // Terminando a execução da classe...

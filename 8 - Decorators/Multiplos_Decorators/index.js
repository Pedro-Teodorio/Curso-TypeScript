"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("executando a função a");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("executando a função b");
    };
}
class MultipleDecorators {
    // Decorators são executados de baixo para cima
    testing() {
        console.log("Terminando a execução da classe...");
    }
}
__decorate([
    a() // executa a função a
    ,
    b() // executa a função b
], MultipleDecorators.prototype, "testing", null);
const myObject = new MultipleDecorators();
myObject.testing(); // Terminando a execução da classe...

"use strict";
class PrivateClass {
    constructor() {
        this.name = "Private Name"; // Atributo privado só pode ser acessado dentro da classe
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Private Method");
    } // Método privado só pode ser acessado dentro da classe
    showPrivateMethod() {
        this.privateMethod();
    } // Método público que chama o método privado
}
const privateObj = new PrivateClass();
console.log(privateObj.showName());
// console.log(privateObj.name); // Erro de compilação - Property 'name' is private and only accessible within class 'PrivateClass'.
privateObj.showPrivateMethod(); // Private Method

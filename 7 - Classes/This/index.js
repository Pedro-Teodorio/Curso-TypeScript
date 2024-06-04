"use strict";
class Truck {
    constructor(model, horsePower) {
        this.model = model;
        this.horsePower = horsePower;
    }
    showDetails() {
        console.log(`Caminhão: ${this.model} - ${this.horsePower}HP`);
    }
}
const volvo = new Truck("Volvo FH", 540);
volvo.showDetails(); // Caminhão: Volvo FH - 540HP

"use strict";
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name); // Chama o construtor da classe pai
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 10);
console.log(trator); // Machine { name: 'Trator' }
console.log(destroyer); // KillerMachine { name: 'Destroyer', guns: 10 }

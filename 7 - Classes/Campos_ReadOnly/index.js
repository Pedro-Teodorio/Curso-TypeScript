"use strict";
class Cars {
    constructor(name) {
        this.whells = 4; // Atributo somente leitura (não pode ser alterado)
        this.name = name;
    }
}
const fusca = new Cars('Fusca');
console.log(fusca.whells); // 4

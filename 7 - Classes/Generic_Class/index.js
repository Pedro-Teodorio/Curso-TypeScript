"use strict";
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O primeiro valor é ${this.first}`;
    }
    get typeItens() {
        return `O tipo do primeiro valor é ${typeof this.first} e o tipo do segundo valor é ${typeof this.second}`;
    }
}
let newItem = new Item("Hello World", 10);
console.log(newItem);
console.log(newItem.showFirst);
console.log(newItem.typeItens);

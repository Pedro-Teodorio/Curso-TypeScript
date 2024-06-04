class Item<T, U> {
	first;
	second;

	constructor(first: T, second: U) {
		this.first = first;
		this.second = second;
	}

	get showFirst():string {
		return `O primeiro valor é ${this.first}`;
	}
    get typeItens():string{
        return `O tipo do primeiro valor é ${typeof this.first} e o tipo do segundo valor é ${typeof this.second}`
    }
}

let newItem = new Item("Hello World", 10);
console.log(newItem);
console.log(newItem.showFirst);
console.log(newItem.typeItens);
const myClass = class<T> {
	name;
	constructor(name: T) {
		this.name = name;
	}
};

const pessoa = new myClass("Fulano");
console.log(pessoa)



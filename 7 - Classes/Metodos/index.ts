class Orc {
	name;
	constructor(name: string) {
		this.name = name; // Atributo público
	}
	attack() {
		console.log(`${this.name} atacou!`);
	}
}

const baldur = new Orc("Baldur");

console.log(baldur.name); // Baldur
baldur.attack(); // Baldur atacou!

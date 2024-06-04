class Machine {
	name;
	constructor(name: string) {
		this.name = name;
	}
}
const trator = new Machine("Trator");

class KillerMachine extends Machine {
	guns;
	constructor(name: string, guns: number) {
		super(name); // Chama o construtor da classe pai
		this.guns = guns;
	}
}

const destroyer = new KillerMachine("Destroyer", 10);

console.log(trator); // Machine { name: 'Trator' }
console.log(destroyer); // KillerMachine { name: 'Destroyer', guns: 10 }

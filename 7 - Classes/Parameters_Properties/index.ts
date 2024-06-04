class Race {
	constructor(public name: string, private distance: number, private height: number) {
		this.name = name;
		this.distance = distance;
		this.height = height;
	}

	get showDistance(): string {
		return `A distância da corrida é ${this.distance} metros`;
	}
	get showHeight(): string {
		return `A altura da corrida é ${this.height} metros`;
	}
}

const shadow = new Race("Metaphorfus", 100, 2);

console.log(shadow.name);
// console.log(shadow.distance); // Erro de compilação - Property 'distance' is private and only accessible within class
console.log(shadow.showDistance); // A distância da corrida é 100 metros
console.log(shadow.showHeight); // A altura da corrida é 2 metros

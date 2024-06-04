class Cars {
	name;
	readonly whells = 4; // Atributo somente leitura (não pode ser alterado)
	constructor(name: string) {
		this.name = name;
	}
}
const fusca = new Cars('Fusca');

console.log(fusca.whells); // 4
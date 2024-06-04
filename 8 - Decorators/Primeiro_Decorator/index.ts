function myDecorator() {
	console.log("Iniciando o decorator...");
	return function (target: any, key: string, descriptor: PropertyDescriptor) {
		console.log("Executando o decorator...");
		console.log(target);
		console.log(key);
		console.log(descriptor);
	};
}
class ClassDecorators {
    @myDecorator()
	testing() {
		console.log("Terminando a execução da classe...");
	}
}

const myObj = new ClassDecorators();

myObj.testing(); // Terminando a execução da classe...

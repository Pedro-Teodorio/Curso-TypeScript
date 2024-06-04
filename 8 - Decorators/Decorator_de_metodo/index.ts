function enumarables(value: boolean) {
	return function (
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor) {
		descriptor.enumerable = value;
	};
}

class Machine_Decorator {
	name;
	constructor(name: string) {
		this.name = name;
	}
    @enumarables(false)
	showName() {
		return `O nome da maquina é ${this.name}`;
	}
}

const sexMachine = new Machine_Decorator("Pedro Lucas");

console.log(sexMachine.showName()); // O nome da maquina é Pedro Lucas

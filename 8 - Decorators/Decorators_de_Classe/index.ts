function classDecorator(constructor: Function) {
	if (constructor.name === "Users_1") {
        console.log("Criando usuário...")
    }
}
@classDecorator
class Users_1 {
	name;
	constructor(name: string) {
		this.name = name;
	}
}
const pedro_lucas = new Users_1("Pedro Lucas");
console.log(pedro_lucas.name); // Pedro Lucas

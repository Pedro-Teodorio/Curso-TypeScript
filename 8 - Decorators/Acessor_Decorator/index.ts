function enumarable(value: boolean) {
	return function (
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor) {
		descriptor.enumerable = value;
	};
}

class Monster {
    name ? 
    age ?
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    @enumarable(false)
    get monsterName(): string {
        return `O nome do monstro é ${this.name}`
    }
    @enumarable(true)
    get monsterAge(): string {
        return `O monstro tem ${this.age} anos`
    }
}

const charizard = new Monster("Charizard", 20);

console.log(charizard)
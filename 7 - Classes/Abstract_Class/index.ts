abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('andando pela terra ...');
    }
}

class Dog extends Animal {
    name
    constructor(name: string) {
        super();
        this.name = name;
    }
    makeSound(): void {
        console.log('Au Au');
    }
}

const cristal = new Dog('Cristal');
cristal.makeSound();
cristal.move();

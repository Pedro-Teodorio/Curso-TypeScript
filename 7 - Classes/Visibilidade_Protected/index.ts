class E {
    protected x: number = 10;
    protected y: number = 20;
}

const eInstance = new E();

class F extends E {
    public sum() {
        return this.x + this.y;
    }
}

const fInstance = new F();
// console.log(fInstance.x); // Erro de compilação - Property 'x' is protected and only accessible within class 'E' and its subclasses.
console.log(fInstance.sum()); // 30
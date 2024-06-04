class Person{
    name
    surname
    constructor (name: string, surname: string){
        this.name = name
        this.surname = surname
    }

    get fullName(){
        return `${this.name} ${this.surname}`
    }
}

const pedro_teodorio = new Person("Pedro", "Teodorio")

console.log(pedro_teodorio.fullName) // Pedro Teodorio
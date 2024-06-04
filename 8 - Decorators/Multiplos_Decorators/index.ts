function a (){
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        console.log("executando a função a")
    }
}

function b (){
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        console.log("executando a função b")
    }
}

class MultipleDecorators{
    // Decorators são executados de baixo para cima
    @a() // executa a função a
    @b() // executa a função b
    testing(){
        console.log("Terminando a execução da classe...")
    }
}

const myObject = new MultipleDecorators();

myObject.testing(); // Terminando a execução da classe...
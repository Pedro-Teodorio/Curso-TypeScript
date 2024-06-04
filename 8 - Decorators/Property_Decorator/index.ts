function formatID(){
    return function(
        target : Object,
        propertyKey : string
    ){
        let value : string;

        const getter = function(){
            return value;
        }

        const setter = function(newValue: string){
            value = newValue.padStart(6, "0");
        }
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}


class  ID{
    @formatID()
    id
    constructor(id: string){
        this.id = id;
    }
}

const newID = new ID("1");

console.log(newID.id) // ID { id: '1' }
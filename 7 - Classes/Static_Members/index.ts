class StaticMembers{
    static prop = "value";
    static method(){
        console.log("Static method");
    }
}

console.log(StaticMembers.prop); // value
StaticMembers.method(); // Static method
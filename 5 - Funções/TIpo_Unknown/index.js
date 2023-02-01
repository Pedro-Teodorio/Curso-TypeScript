"use strict";
function doSomething(x) {
    if (Array.isArray(x))
        console.log(x[0]);
    else if (typeof x === "number")
        console.log("X é um numero");
    else if (typeof x === "string")
        console.log("X é uma string");
}
doSomething([1, 2, 3]);
doSomething(5);
doSomething("Teste 123");

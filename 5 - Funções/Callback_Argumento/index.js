"use strict";
function greeting(name) {
    return `Olá ${name}, Tudo bem ?`;
}
function pregreeting(fun, userName) {
    console.log(`Preparando a função`);
    const greeting = fun(userName);
    return greeting;
}
console.log(pregreeting(greeting, 'Pedro Lucas Teodorio da Silva'));

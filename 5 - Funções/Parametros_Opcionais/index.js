"use strict";
function mordernGreeting(name, greet) {
    if (greet)
        return `Olá ${greet} ${name} tudo bem?`;
    return `Olá ${name} tudo bem?`;
}
console.log(mordernGreeting("Pedro", "Senhor"));
console.log("Heloiza");

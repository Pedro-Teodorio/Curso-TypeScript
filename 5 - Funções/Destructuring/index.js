"use strict";
function showProductDetails({ name, price, }) {
    return `O nome do produto é ${name} e custa R$ ${price}`;
}
const shirt = { name: "Camisa", price: 499.99 };
console.log(showProductDetails(shirt));

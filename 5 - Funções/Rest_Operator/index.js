"use strict";
function sumAll(...num) {
    return num.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4));

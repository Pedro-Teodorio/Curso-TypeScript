"use strict";
function sumDefault(num, num2 = 5) {
    return num + num2;
}
console.log(sumDefault(12));
console.log(sumDefault(1, 2));

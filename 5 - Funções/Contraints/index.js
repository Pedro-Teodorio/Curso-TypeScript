"use strict";
function biggestNumber(arg1, arg2) {
    let biggest = +arg1 > +arg2 ? arg1 : arg2;
    return biggest;
}
console.log(biggestNumber(50, "40"));
console.log(biggestNumber(1, 4));

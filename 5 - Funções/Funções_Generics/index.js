"use strict";
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4]));
console.log(firstElement(["a", "b", "c", "d", "e", "f"]));
function mergeObjects(obj_1, obj_2) {
    return Object.assign(Object.assign({}, obj_1), obj_2);
}
const newObject = mergeObjects({ name: "Pedro Lucas" }, { age: 21, job: "Programmer" });
console.log(newObject);

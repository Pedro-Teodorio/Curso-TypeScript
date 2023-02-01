function firstElement<T>(arr: T[]): T {
  return arr[0];
}
console.log(firstElement([1, 2, 3, 4]));
console.log(firstElement(["a", "b", "c", "d", "e", "f"]));

function mergeObjects<U, T>(obj_1: U, obj_2: T) {
  return {
    ...obj_1,
    ...obj_2,
  };
}

const newObject = mergeObjects(
  { name: "Pedro Lucas" },
  { age: 21, job: "Programmer" }
);

console.log(newObject);

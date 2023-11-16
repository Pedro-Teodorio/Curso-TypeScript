let myArray: ReadonlyArray<string> = ["Maçã", "Banana", "Laranja"];

console.log(myArray);

myArray.forEach((itens) => {
  console.log("Fruta: " + itens);
});

myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});
console.log(myArray);

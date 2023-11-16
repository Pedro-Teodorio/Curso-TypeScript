interface Human {
  name: string;
  age: number;
}
interface SuperHuman extends Human {
  powers: string[];
}
const pedro: Human = {
  name: "Pedro",
  age: 21,
};

console.log(pedro);

const luffy: SuperHuman = {
  name: "Luffy",
  age: 21,
  powers: ["Haki do Rei", "Gomu Gomu no Mi"],
};
console.log(luffy);
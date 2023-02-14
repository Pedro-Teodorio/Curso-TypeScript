interface Car {
  brand: string;
  readonly wheels: number;
}
const palio: Car = {
  brand: "Fiat",
  wheels: 4,
};
// palio.wheels = 5;
console.log(palio)
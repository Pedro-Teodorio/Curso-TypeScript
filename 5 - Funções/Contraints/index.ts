function biggestNumber<T extends number | string, U extends number | string>(
  arg1: T,
  arg2: U
): T | U {  
  let biggest: T | U = +arg1 > +arg2 ? arg1 : arg2;
  return biggest;
}
console.log(biggestNumber(50, "40"));
console.log(biggestNumber(1, 4));

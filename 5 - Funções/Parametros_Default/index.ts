function sumDefault(num: number, num2 = 5): number {
  return num + num2;
}
console.log(sumDefault(12));
console.log(sumDefault(1, 2));

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}
console.log(mergeArrays<number | string>([1, 2, 3], ["a", "b", "c"]));

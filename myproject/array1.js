function countEven(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}
const numbers1 = [1, 4, 6, 9, 12, 15];
const numbers2 = [2, 3, 5, 7, 11, 14, 18];
console.log(countEven(numbers1));
console.log(countEven(numbers2));

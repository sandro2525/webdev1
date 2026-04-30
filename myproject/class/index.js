const numbers = [5, 7, 14, 20, 21, 33, 49, 50];
const isDivisibleBy7 = (num) => num % 7 === 0;
numbers.forEach(num => {
  if (isDivisibleBy7(num)) {
    console.log(num);
  }
});
// concat all numbers in array with each other and return their sum

// example: [10,2]
// 10 + 10 = 1010
// 10 + 2 = 102
// 2 + 10 = 210
// 2 + 2 = 22
// total sum = 1344

// 12
// [1200, 120]
// 1320

// 36
const concatenationSum = arr => {
  let lowSum = arr.reduce((acc, num) => acc + num);
  let sum = lowSum * arr.length
  arr.forEach(num => sum += lowSum * 10 ** (num.toString().length));
  return sum;
};
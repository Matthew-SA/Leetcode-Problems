// Given an array of numbers nums, in which exactly two elements appear only once 
// and all the other elements appear exactly twice. Find the two elements that appear only once.

// Example:

// Input:  [1,2,1,3,2,5]
// Output: [3,5]
// Note:

// The order of the result is not important. So in the above example, [5, 3] is also correct.
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?


// Simple solution:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = (nums) => {
  let result = {};

  nums.forEach((num) => {
    result[num] ? delete result[num] : (result[num] = true);
  });

  return Object.keys(result);
};

// Optimized solution:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = nums => {
  let xorNum = nums.reduce((acc, num) => acc ^ num);
  let bitXor = xorNum.toString(2);

  for (i = bitXor.length; i > 0; i--) {
    if (bitXor[i] == 1) {
      firstXorSetBit = bitXor.length - i;
      break;
    }
  }
  
  let num1 = null,
      num2 = null;
  
  nums.forEach(num => {
    if (num & 1 << firstXorSetBit - 1) {
      num1 = num1 === null ? num1 = num : num1 ^= num;
    } else {
      num2 = num2 === null ? num2 = num : num2 ^= num;
    }
  });
  return [num1,num2];
};
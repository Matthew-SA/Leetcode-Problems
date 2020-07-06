// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of 
// the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  let carryOver = false;
  digits[digits.length - 1] += 1;

  for (let i = digits.length; i >= 0; i--) {
    if (carryOver) {
      digits[i] += 1;
      carryOver = false;
    }

    if (digits[i] > 9) {
      digits[i] %= 10;
      carryOver = true;
    }
  }

  if (carryOver) digits.unshift(1);
  return digits;
};

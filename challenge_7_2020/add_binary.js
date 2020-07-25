// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// Each string consists only of '0' or '1' characters.
// 1 <= a.length, b.length <= 10^4
// Each string is either "0" or doesn't contain any leading zero.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  let result = "";
  let carry = 0;
  let length = a.length > b.length ? a.length : b.length;

  for (
    let idxA = a.length - 1, idxB = b.length - 1;
    idxA >= 0 || idxB >= 0 || carry;
    idxA--, idxB--
  ) {
    let sum = (+a[idxA] || 0) + (+b[idxB] || 0) + carry;
    if (sum > 1) {
      sum %= 2;
      carry = 1;
    } else {
      carry = 0;
    }
    result = sum + result;
  }

  return result;
};

const test = num => {
  return num & ~(num-1)
}



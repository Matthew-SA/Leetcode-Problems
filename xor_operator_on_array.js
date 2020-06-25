// Given an integer n and an integer start.

// Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.

// Return the bitwise XOR of all elements of nums.

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let output = undefined;
    for (let i = 0; i < n; i++) {
        num = start + 2 * i;
        output ? output ^= num : output = num;
    }
    return output;
};
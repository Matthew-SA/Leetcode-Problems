// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum_array = [nums[0]];
  nums.reduce((acc, num) => {
    sum = acc + num;
    sum_array.push(sum);
    return sum;
  });
  return sum_array;
};

// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let results = [[]];

  nums.forEach((num) => {
    results.forEach((set) => {
      let newSubset = set.concat(num);
      results.push(newSubset);
    });
  });
  return results;
};

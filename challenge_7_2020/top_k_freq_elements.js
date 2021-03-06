// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Note:

// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
// It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let counts = new Map();
  let frequencies = [];
  let result = [];

  nums.forEach((num) => {
    counts.set(num, (counts.get(num) || 0) + 1);
  });

  for (let [num, freq] of counts) {
    frequencies[freq] = (frequencies[freq] || new Set()).add(num);
  }

  for (let i = frequencies.length - 1; i > 0; i--) {
    if (frequencies[i]) result.push(...frequencies[i]);
    if (result.length === k) break;
  }

  return result;
};

// Given an array nums of n integers, are there elements a, b, c in nums such that 
// a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
  let sortedNums = nums.sort((a,b) => a - b);
  let results = [];

  let lastOuterNum = undefined;
  for (let i = 0; i < nums.length - 2; i++) {
    if (lastOuterNum === sortedNums[i]) continue;
    lastOuterNum = sortedNums[i];
    
    let lastInnerNum = undefined;
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (lastInnerNum === sortedNums[j]) continue;
      lastInnerNum = sortedNums[j];

      let difference = -(sortedNums[i] + sortedNums[j]);
      let search = bSearch(sortedNums, j+1, nums.length, difference);
      if (search > 1) results.push([sortedNums[i], sortedNums[j], difference]);
    };
  };
  return results;
};

const bSearch = (arr, start, end, target) => {
  if (start > end) return -1;
  let pivot = Math.floor((start + end) / 2);
  
  if (arr[pivot] === target) {
    return pivot;
  } else if (target < arr[pivot]) {
    return bSearch(arr, start, pivot - 1, target);
  } else {
    return bSearch(arr, pivot + 1, end, target);
  }
};





/// BAD 3SUM
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
  let results = [];
  let seen = {};
  
  nums.forEach((num, i) => {
    if (seen[num]) return;
    let resultPart = twoSum(nums, i);
    resultPart.forEach(part => {
      if (!seen[part]) {
        results.push(part)
        seen[part] = true;
      }
    })
    seen[num] = true;
  })
  
  return results;
};

const twoSum = (arr, targetIdx) => {
  let targetNum = arr[targetIdx];
  let seen = new Set();
  let results = [];
  
  arr.forEach((num, i) => {
    if (targetIdx === i) return;
    let neededNum = -targetNum - num;

    if (seen.has(neededNum)) {
      results.push([targetNum, neededNum, num].sort());
      seen.add(neededNum);
    }
    
    seen.add(num);
  })

  return results;
};







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
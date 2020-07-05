// Write a program to find the n-th ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

// Example:

// Input: n = 10
// Output: 12
// Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
// Note:  

// 1 is typically treated as an ugly number.
// n does not exceed 1690.


/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let uglyNum = 1;
  let count = 1;
  let multiQueue = [[], [], []];
  let seen = {};

  while (count < n) {
    let ugly2 = uglyNum * 2;
    let ugly3 = uglyNum * 3;
    let ugly5 = uglyNum * 5;

    if (!seen[ugly2]) {
      multiQueue[0].push(ugly2);
      seen[ugly2] = true;
    }
    if (!seen[ugly3]) {
      multiQueue[1].push(ugly3);
      seen[ugly3] = true;
    }
    if (!seen[ugly5]) {
      multiQueue[2].push(ugly5);
      seen[ugly5] = true;
    }

    let UglyQueue = multiQueue.reduce((acc, queue) => {
      return acc[0] <= queue[0] ? acc : queue;
    });

    uglyNum = UglyQueue.shift();
    count++;
  }
  return uglyNum;
};


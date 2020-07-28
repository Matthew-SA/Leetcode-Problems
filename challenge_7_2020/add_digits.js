// Given a non - negative integer num, repeatedly add all its digits until the result has only one digit.

//   Example:

// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
// Since 2 has only one digit, return it.
// Follow up:
// Could you do it without any loop / recursion in O(1) runtime ?

//   Hide Hint #1
// A naive implementation of the above process is trivial.Could you come up with other methods ?
//   Hide Hint #2
// What are all the possible results ?
//   Hide Hint #3
// How do they occur, periodically or randomly ?
//   Hide Hint #4
// You may find this Wikipedia article useful.

/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
  if (num <= 9) return num;

  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return addDigits(sum);
};

// https://www.omdbapi.com/?i=${imdb-id}&apikey=75a5d7f7
// https://www.omdbapi.com/?i=tt0076759&apikey=75a5d7f7

function mergeStrings(s1, s2) {
    let s1count = {},
        s2count = {},
        result = "";
        
    for (let i = 0; i < s1.length; i++) s1count[s1[i]] ? s1count[s1[i]] += 1 : s1count[s1[i]] = 1;
    for (let i = 0; i < s2.length; i++) s2count[s2[i]] ? s2count[s2[i]] += 1 : s2count[s2[i]] = 1;
    
    let totalLength = s1.length + s2.length,
        i = 0,
        j = 0;
        
    while (result.length < totalLength) {
        if (s1count[s[i]] < s2count[s[j]])
    };
}




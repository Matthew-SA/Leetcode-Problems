// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:

// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let pattern_arr = pattern.split("");
  let words = str.split(" ");
  let seenAB = {};
  let seenBA = {};

  if (pattern_arr.length !== words.length) return false;

  for (let i = 0; i < words.length; i++) {
    let symbol = pattern_arr[i];
    let word = words[i];
    if (!seenAB[symbol] && !seenBA[word]) {
      seenAB[symbol] = word;
      seenBA[word] = symbol;
    } else if (seenAB[symbol] !== word || seenBA[word] !== symbol) {
      return false;
    }
  }
  return true;
};

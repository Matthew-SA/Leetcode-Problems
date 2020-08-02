// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.
 

// Example 1:

// Input: "USA"
// Output: True
 

// Example 2:

// Input: "FlaG"
// Output: False
 

// Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.

/**
 * @param {string} word
 * @return {boolean}
 */
function detectCapitalUse(word) {
  if (word.length === 1) return true;
  if (word[0] === word[0].toUpperCase() && word[1] === word[1].toUpperCase()) {
    for (let i = 2; i < word.length; i++) {
      if (word[i] !== word[i].toUpperCase()) return false;
    }
  } else {
    for (let i = 1; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) return false;
    }
  }
  return true;
}

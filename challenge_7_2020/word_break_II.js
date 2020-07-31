// Given a non-empty string s and a dictionary wordDict containing a list of 
// non-empty words, add spaces in s to construct a sentence where each word is a 
// valid dictionary word. Return all such possible sentences.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input:
// s = "catsanddog"
// wordDict = ["cat", "cats", "and", "sand", "dog"]
// Output:
// [
//   "cats and dog",
//   "cat sand dog"
// ]
// Example 2:

// Input:
// s = "pineapplepenapple"
// wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
// Output:
// [
//   "pine apple pen apple",
//   "pineapple pen apple",
//   "pine applepen apple"
// ]
// Explanation: Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input:
// s = "catsandog"
// wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output:
// []

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

// Input:
// s = "pineapplepenapple"
// wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
// Output:
// [
//   "pine apple pen apple",
//   "pineapple pen apple",
//   "pine applepen apple"
// ]

// copied solution - review this one. **

function wordBreak(s, wordDict) {
  const memo = new Map();

  function run(string) {
    if (memo.has(string)) return memo.get(string);
    if (!string.length) return [];

    const results = [];

    for (let word of wordDict) {
      if (string.startsWith(word)) {
        const next = string.slice(word.length);
        const paths = run(next);

        if (!paths.length && !next.length) results.push(word);
        results.push(...paths.map((rest) => word + " " + rest));
      }
    }
    memo.set(string, results);
    return results;
  }
  return run(s);
}

// You are implementing your own programming language and you've decided to add 
// support for merging strings. A typical merge function would take two strings s1 
// and s2, and return the lexicographically smallest result that can be obtained by 
// placing the symbols of s2 between the symbols of s1 in such a way that maintains 
// the relative order of the characters in each string.

// For example, if s1 = "super" and s2 = "tower", the result should be merge(s1, s2) = "stouperwer".



//   You'd like to make your language more unique, so for your merge function, i
//   nstead of comparing the characters in the usual lexicographical order, you'll
//    compare them based on how many times they occur in their respective 
//    strings(fewer occurrences means the character is considered smaller).If the n
//    umber of occurrences are equal, then the characters should be compared in the
//     usual way.If both number of occurences and characters are equal, you should 
//     take the characters from the first string to the result.

// Given two strings s1 and s2, return the result of the special merge function you
//  are implementing.

//   Example

// For s1 = "dce" and s2 = "cccbd", the output should be
// mergeStrings(s1, s2) = "dcecccbd".
// All symbols from s1 goes first, because all of them have only 1 occurrence in s1
//  and c has 3 occurrences in s2.



// For s1 = "super" and s2 = "tower", the output should be
// mergeStrings(s1, s2) = "stouperwer".
// Because in both strings all symbols occur only 1 time, strings are merged as 
// usual.You can find explanation for this example on the image in the description.

//   Input / Output

//   [execution time limit]4 seconds(js)

//   [input] string s1

// A string consisting only of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s1.length ≤ 104.

// [input] string s2

// A string consisting only of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s2.length ≤ 104.

// [output] string

// The string that results by merging s1 and s2 using your special merge function.
// [JavaScript(ES6)] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//   console.log("This prints to the console when you Run Tests");
//   return "Hello, " + name;
// }


function mergeStrings(s1, s2) {
  let chars1 = s1.split(''),
    chars2 = s2.split(''),
    s1Count = {},
    s2Count = {},
    result = [];

  chars1.forEach(char => s1Count[char] ? s1Count[char] += 1 : s1Count[char] = 1);
  chars2.forEach(char => s2Count[char] ? s2Count[char] += 1 : s2Count[char] = 1);

  while (chars1.length || chars2.length) {
    let char1val = (s1Count[chars1[0]] || 0);
    let char2val = (s2Count[chars2[0]] || 0);

    if (!chars1.length) {
      result = result.concat(chars2);
      break;
    }

    if (!chars2.length) {
      result = result.concat(chars1);
      break;
    }

    if (char1val < char2val) {
      let char = chars1.shift();
      result.push(char);
    } else if (s1Count[chars1[0]] > s2Count[chars2[0]]) {
      let char = chars2.shift();
      result.push(char);
    } else {
      if (chars1[0] <= chars2[0]) {
        let char = chars1.shift();
        result.push(char);
      } else {
        let char = chars2.shift();
        result.push(char);
      }
    }
  };
  return result.join('');
}
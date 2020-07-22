// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where 
// "adjacent" cells are those horizontally or vertically neighboring. The same 
// letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.
 

// Constraints:

// board and word consists only of lowercase and uppercase English letters.
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  let seen = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0] && buildWord(board, word, j, i)) return true;
    }
  }
  return false;
};

const buildWord = (board, word, x, y, currentWord = "") => {
  if (word === currentWord) return true;
  if (board[y]?.[x] !== word[currentWord.length]) return false;

  let char = board[y][x];
  currentWord += char;
  board[y][x] = "-";

  let top = buildWord(board, word, x, y - 1, currentWord);
  let right = buildWord(board, word, x + 1, y, currentWord);
  let bottom = buildWord(board, word, x, y + 1, currentWord);
  let left = buildWord(board, word, x - 1, y, currentWord);

  if (top || right || bottom || left) return true;
  board[y][x] = char;
};

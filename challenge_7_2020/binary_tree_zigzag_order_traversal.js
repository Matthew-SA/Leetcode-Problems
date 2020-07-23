// Given a binary tree, return the zigzag level order traversal of its nodes' 
// values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:

// [
//   [3],
//   [20,9],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = (root) => {
  let result = [];
  let queue = [];
  let subQueue = [root];
  let isReversed = false;

  while (queue.length >= 0) {
    if (queue.length === 0) {
      if (subQueue.length === 0) {
        return result;
      } else {
        let row = [];
        subQueue.forEach((node) => {
          if (node) {
            isReversed ? row.unshift(node.val) : row.push(node.val);
          }
        });

        if (row.length > 0) {
          result.push(row);
        }
        isReversed = !isReversed;
        queue = subQueue;
        subQueue = [];
      }
    } else {
      let node = queue.shift();
      if (node) {
        subQueue.push(node.left);
        subQueue.push(node.right);
      }
    }
  }
  return "oh no";
};

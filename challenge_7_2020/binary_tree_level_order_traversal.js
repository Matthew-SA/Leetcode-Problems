// Given a binary tree, return the bottom - up level order traversal of its 
// nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree[3, 9, 20, null, null, 15, 7],

//   3
//   / \
// 9  20
//   /  \
// 15   7
// return its bottom - up level order traversal as:

// [
//   [15, 7],
//   [9, 20],
//   [3]
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
var levelOrderBottom = function (root) {
  let result = [];
  let queue = [];
  let subQueue = [root];

  while (queue.length >= 0) {
    if (queue.length === 0) {
      if (subQueue.length === 0) {
        return result;
      } else {
        let row = [];
        subQueue.forEach(node => {
          if (node) row.push(node.val)
        })

        if (row.length > 0) result.unshift(row);
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
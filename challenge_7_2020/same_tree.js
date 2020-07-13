//   Same Tree

// Solution
// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

// Example 1:

// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true
// Example 2:

// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// Output: false
// Example 3:

// Input:     1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// Output: false

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let pQueue = [p];
  let qQueue = [q];

  while (pQueue.length > 0 || qQueue.length > 0) {
    let pNode = pQueue.shift();
    let qNode = qQueue.shift();

    if (pNode?.val === qNode?.val) {
      if (pNode && qNode) {
        pQueue.push(pNode.left);
        pQueue.push(pNode.right);
        qQueue.push(qNode.left);
        qQueue.push(qNode.right);
      }
    } else {
      return false;
    }
  }
  return true;
};

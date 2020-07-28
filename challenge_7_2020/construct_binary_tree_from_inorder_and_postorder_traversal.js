// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = (inorder, postorder) => {
  if (!inorder.length) return null;

  let root = postorder[postorder.length - 1];
  let pivot = inorder.indexOf(root);

  let node = new TreeNode(
    root,
    buildTree(inorder.slice(0, pivot), postorder.slice(0, pivot)),
    buildTree(inorder.slice(pivot + 1), postorder.slice(pivot, -1))
  );

  return node;
};

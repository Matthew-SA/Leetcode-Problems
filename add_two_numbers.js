// 2. Add Two Numbers
// Medium

// 8014

// 2043

// Add to List

// Share
// You are given two non - empty linked lists representing two non - negative 
// integers.The digits are stored in reverse order and each of their nodes contain 
// a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except 
// the number 0 itself.

//   Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// set result = linked list.
// while l1 AND l2 vals are not undefined
// we sum the values plus carryOver
// create new node and set value to node, point node to previous node if able to

// l1 = 243
// l2 = 564
// expected = 708


var addTwoNumbers = function (l1, l2) {
  let currentL1 = l1; // null
  let currentL2 = l2; // null
  let firstNode = null;
  let lastNode = null; // 8
  let carryOver = false; // false

  while (carryOver || currentL1 || currentL2) {
    let sum = carryOver ? 1 : 0; // 8
    carryOver = false;

    if (currentL1) {
      sum += currentL1.val;
      currentL1 = currentL1.next
    }

    if (currentL2) {
      sum += currentL2.val;
      currentL2 = currentL2.next;
    }

    if (sum > 9) {
      carryOver = true;
      sum -= 10;
    }

    let newNode = new ListNode(sum, null) // 8 -> null;
    if (lastNode) {
      lastNode.next = newNode;
    } else {
      firstNode = newNode;
    }
    lastNode = newNode;
  }

  return firstNode;
};

// chain 7 -> 0 -> 8 -> null;

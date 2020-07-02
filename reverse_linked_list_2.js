// Reverse a linked list from position m to n. Do it in one-pass.

// Note: 1 ≤ m ≤ n ≤ length of list.

// Example:

// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

var reverseBetween = function (head, m, n) {
  if (n <= m) return head;
};

var reverseBetween = function (head, m, n) {
  if (n <= m) return head;

  let current_node = head;
  let first_segment_end = undefined;

  let reversed_head = undefined;
  let reversed_tail = undefined;

  let pos = 1;

  while (current_node) {
    if (pos + 1 === m) first_segment_end = current_node;

    if (m <= pos && pos <= n) {
      rev_node = new ListNode(current_node.val, reversed_head);
      reversed_head = rev_node;
      if (pos === m) reversed_tail = rev_node;
    }

    if (pos === n) {
      reversed_tail.next = current_node.next;
      if (first_segment_end) {
        first_segment_end.next = reversed_head;
        return head;
      } else {
        return reversed_head;
      }
    }
    pos++;
    current_node = current_node.next;
  }
};

/**
 * Middle of the Linked List
 * 
 * Given the head of a singly linked list, return the middle node of the linked list. 
 * If there are two middle nodes, return the second middle node.
 * 
 * Example: [1,2,3,4,5] -> [3,4,5]
 * 
 * Solution: The easiest way to solve this problem is by implementing the fast and slow pointers technique.
 * The fast pointers move nodes per every node the slow pointer advances, therefore by the end of the fast pointer
 * the slow pointer would be at the middle.
*/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow?.next || null;
    fast = fast.next.next;
  }
  return slow;
};
/**
 * Remove duplicates from Sorted List
 * 
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
 * Return the linked list sorted as well.
 * 
 * Example: [1,1,2] -> [1,2]
 * 
 * Solution: Because the list is sorted, we only need to have 2 pointers separated by 1.
 * If we advance both pointers and their value is the same, we need to remove the node on the fast pointer.
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let dummy = head;
    let slow = head;
    let fast = head?.next;
    while (fast) {
      if (slow?.val === fast.val) {
        slow.next = fast.next;
        fast = fast?.next || null;
      } else {
        slow = slow?.next || null;
        fast = fast?.next || null;
      }
    }   
    return dummy;
};
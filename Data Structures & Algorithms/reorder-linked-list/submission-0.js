/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null;
        let curr = slow;
        while (curr !== null) {
            const tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }

        fast = head;
        while (prev !== null) {
            const tmp1 = prev.next;
            const tmp2 = fast.next;
            fast.next = prev;
            prev.next = tmp2;
            prev = tmp1;
            fast = tmp2;
        }

        if (fast !== null) {
            fast.next = null;
        }
    }
}

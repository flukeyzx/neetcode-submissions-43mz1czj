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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode(0, null)
        let node = dummy

        while(list1 && list2) {
            if(list1.val < list2.val) {
                node.next = new ListNode(list1.val)
                list1 = list1.next
            } else {
                node.next = new ListNode(list2.val)
                list2 = list2.next
            }
            node = node.next
        }

        if(list1) {
            node.next = list1
        }
        if(list2) {
            node.next = list2
        }

        return dummy.next
    }
}

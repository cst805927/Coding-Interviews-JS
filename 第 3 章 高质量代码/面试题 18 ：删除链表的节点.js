/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (!head) return
    if (head.val === val) {
        head = head.next
        return head
    }
    let pNode = head
    while (pNode.next.val !== val) {
        pNode = pNode.next
    }
    let pNext = pNode.next
    pNode.next = pNext.next
    delete pNext
    return head
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2
    else if (!l2) return l1
    let pMergedHead = null
    if (l1.val < l2.val) {
        pMergedHead = l1
        pMergedHead.next = mergeTwoLists(l1.next, l2)
    } else {
        pMergedHead = l2
        pMergedHead.next = mergeTwoLists(l1, l2.next)
    }
    return pMergedHead
};
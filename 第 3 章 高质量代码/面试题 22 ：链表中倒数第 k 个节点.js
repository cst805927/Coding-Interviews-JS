/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    if (!head || k === 0) return null
    let pAhead = head
    let pBehind = null
    for (let i = 0; i < k - 1; i++) {
        if (pAhead.next)
            pAhead = pAhead.next
        else return null
    }
    pBehind = head
    while (pAhead.next) {
        pAhead = pAhead.next
        pBehind = pBehind.next
    }
    return pBehind
};
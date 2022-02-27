/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    const nLength1 = GetListLength(headA)
    const nLength2 = GetListLength(headB)
    const nLengthDiff = Math.abs(nLength1 - nLength2)
    let pListHeadLong = headA
    let pListHeadShort = headB
    if (nLength2 > nLength1) {
        pListHeadLong = headB
        pListHeadShort = headA
    }
    for (let i = 0; i < nLengthDiff; i++)
        pListHeadLong = pListHeadLong.next
    while (pListHeadLong && pListHeadShort && pListHeadLong !== pListHeadShort) {
        pListHeadLong = pListHeadLong.next
        pListHeadShort = pListHeadShort.next
    }
    const pFirstCommonNode = pListHeadLong
    return pFirstCommonNode
};

function GetListLength(pHead) {
    let nLength = 0
    let pNode = pHead
    while (pNode) {
        nLength++
        pNode = pNode.next
    }
    return nLength
}
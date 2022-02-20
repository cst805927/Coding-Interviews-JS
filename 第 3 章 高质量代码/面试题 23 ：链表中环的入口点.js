/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let meetingNode = MeetingNode(head)
    if (!meetingNode) return null
    let nodesInLoop = 1
    let pNode1 = meetingNode
    while (pNode1.next !== meetingNode) {
        pNode1 = pNode1.next
        nodesInLoop++
    }
    pNode1 = head
    for (let i = 0; i < nodesInLoop; i++)
        pNode1 = pNode1.next
    let pNode2 = head
    while (pNode1 !== pNode2) {
        pNode1 = pNode1.next
        pNode2 = pNode2.next
    }
    return pNode1
};

function MeetingNode(head) {
    if (!head) return null
    let pSlow = head.next
    if (!pSlow) return null
    let pFast = pSlow.next
    while (pFast && pSlow) {
        if (pFast === pSlow) return pFast
        pSlow = pSlow.next
        pFast = pFast.next
        if (pFast)
            pFast = pFast.next
    }
    return null
}
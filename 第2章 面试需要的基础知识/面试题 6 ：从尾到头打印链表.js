/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    const nodes = []
    const result = []
    let pNode = head
    while (pNode !== null) {
        nodes.push(pNode.val)
        pNode = pNode.next
    }
    while (nodes.length) {
        result.push(nodes.pop())
    }
    return result
};
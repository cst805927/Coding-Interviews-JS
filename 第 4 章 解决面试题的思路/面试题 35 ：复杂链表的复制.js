/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    CloneNodes(head)
    ConnectSiblingNodes(head)
    return ReconnectNodes(head)
};

function CloneNodes(pHead) {
    let pNode = pHead
    while (pNode) {
        const pCloned = new Node()
        pCloned.val = pNode.val
        pCloned.next = pNode.next
        pCloned.random = null
        pNode.next = pCloned
        pNode = pCloned.next
    }
}

function ConnectSiblingNodes(pHead) {
    let pNode = pHead
    while (pNode) {
        const pCloned = pNode.next
        if (pNode.random)
            pCloned.random = pNode.random.next
        pNode = pCloned.next
    }
}

function ReconnectNodes(pHead) {
    let pNode = pHead
    let pClonedHead = null
    let pClonedNode = null
    if (pNode) {
        pClonedHead = pClonedNode = pNode.next
        pNode.next = pClonedHead.next
        pNode = pNode.next
    }
    while (pNode) {
        pClonedNode.next = pNode.next
        pClonedNode = pClonedNode.next
        pNode.next = pClonedNode.next
        pNode = pNode.next
    }
    return pClonedHead
}
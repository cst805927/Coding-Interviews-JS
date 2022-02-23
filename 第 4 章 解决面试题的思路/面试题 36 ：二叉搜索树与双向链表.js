/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    if (!root) return null
    const pLastNodeInList = {
        node: null
    }
    ConvertNode(root, pLastNodeInList)
    let pLastNode = pLastNodeInList.node
    let pHeadOfList = pLastNodeInList.node
    while (pHeadOfList && pHeadOfList.left)
        pHeadOfList = pHeadOfList.left
    pLastNode.right = pHeadOfList
    pHeadOfList.left = pLastNode
    return pHeadOfList
};

function ConvertNode(pNode, pLastNodeInList) {
    if (!pNode) return
    let pCurrent = pNode
    pCurrent.left && ConvertNode(pCurrent.left, pLastNodeInList)
    pCurrent.left = pLastNodeInList.node
    if (pLastNodeInList.node)
        pLastNodeInList.node.right = pCurrent
    pLastNodeInList.node = pCurrent
    pCurrent.right && ConvertNode(pCurrent.right, pLastNodeInList)
}
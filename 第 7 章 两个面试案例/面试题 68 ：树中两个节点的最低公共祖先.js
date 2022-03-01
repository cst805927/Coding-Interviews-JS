/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (p === q) return p
    let pNode = root
    const bigger = Math.max(p.val, q.val)
    const smaller = Math.min(p.val, q.val)
    while (pNode) {
        if (pNode.val <= bigger && pNode.val >= smaller) return pNode
        else if (pNode.val > bigger)
            pNode = pNode.left
        else if (pNode.val < smaller)
            pNode = pNode.right
    }
    return pNode
};
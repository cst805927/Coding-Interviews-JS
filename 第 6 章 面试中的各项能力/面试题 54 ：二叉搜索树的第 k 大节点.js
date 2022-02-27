/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    if (!root) return null
    const kValue = {
        val: k
    }
    const target = KthNodeCode(root, kValue)
    return target.val
};

function KthNodeCode(pRoot, k) {
    let target = null
    if (pRoot.right)
        target = KthNodeCode(pRoot.right, k)
    if (!target) {
        if (k.val === 1) target = pRoot
        k.val--
    }
    if (!target && pRoot.left)
        target = KthNodeCode(pRoot.left, k)
    return target
}
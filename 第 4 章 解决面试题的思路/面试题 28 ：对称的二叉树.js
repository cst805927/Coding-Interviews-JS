/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return isSymmetrical(root, root)
};

function isSymmetrical(pRoot1, pRoot2) {
    if (!pRoot1 && !pRoot2) return true
    if (!pRoot1 || !pRoot2) return false
    if (pRoot1.val !== pRoot2.val) return false
    return isSymmetrical(pRoot1.left, pRoot2.right) && isSymmetrical(pRoot1.right, pRoot2.left)
}
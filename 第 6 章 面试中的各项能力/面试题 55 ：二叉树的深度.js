/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0
    const nLeft = maxDepth(root.left)
    const nRight = maxDepth(root.right)
    return (nLeft > nRight) ? (nLeft + 1) : (nRight + 1)
};
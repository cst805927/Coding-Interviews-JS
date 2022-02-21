/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    if (!root) return null
    if (!root.left && !root.right) return root
    MirrorRecursively(root)

    function MirrorRecursively(root) {
        if (!root) return
        if (!root.left && !root.right) return [root.left, root.right] = [root.right, root.left]
        root.left && MirrorRecursively(root.left)
        root.right && MirrorRecursively(root.right)
    }
    return root
};
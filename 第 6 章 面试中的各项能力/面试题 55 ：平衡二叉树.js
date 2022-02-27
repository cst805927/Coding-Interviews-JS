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
var isBalanced = function (root) {
    const depth = {
        val: 0
    }
    return IsBalanced(root, depth)
};

function IsBalanced(root, depth) {
    if (!root) {
        depth.val = 0
        return true
    }
    const left = {
        val: 0
    }
    const right = {
        val: 0
    }
    if (IsBalanced(root.left, left) && IsBalanced(root.right, right)) {
        const diff = Math.abs(left.val - right.val)
        if (diff <= 1) {
            depth.val = (left.val > right.val) ? (left.val + 1) : (right.val + 1)
            return true
        }
    }
    return false
}
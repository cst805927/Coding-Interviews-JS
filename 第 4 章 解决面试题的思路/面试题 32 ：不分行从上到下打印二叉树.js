/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return null
    const result = []
    const dequeTreeNode = []
    dequeTreeNode.push(root)
    while (dequeTreeNode.length) {
        let pNode = dequeTreeNode[0]
        result.push(dequeTreeNode.shift().val)
        pNode.left && dequeTreeNode.push(pNode.left)
        pNode.right && dequeTreeNode.push(pNode.right)
    }
    return result
};
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
    if (!root) return []
    const result = []
    const levels = Array(2)
    levels[0] = []
    levels[1] = []
    let temp = []
    let current = 0
    let next = 1
    levels[current].push(root)
    while (levels[0].length || levels[1].length) {
        const pNode = levels[current].pop()
        temp.push(pNode.val)
        if (current === 0) {
            pNode.left && levels[next].push(pNode.left)
            pNode.right && levels[next].push(pNode.right)
        } else {
            pNode.right && levels[next].push(pNode.right)
            pNode.left && levels[next].push(pNode.left)
        }
        if (!levels[current].length) {
            result.push(temp)
            temp = []
            current = 1 - current
            next = 1 - current
        }
    }
    return result
};
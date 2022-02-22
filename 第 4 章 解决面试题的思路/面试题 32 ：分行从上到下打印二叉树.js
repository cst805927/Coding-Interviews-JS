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
    const nodes = []
    let temp = []
    const result = []
    nodes.push(root)
    let nextLevel = 0
    let toBePrinted = 1
    while (nodes.length) {
        const pNode = nodes.shift()
        temp.push(pNode.val)
        pNode.left && nodes.push(pNode.left) && nextLevel++
        pNode.right && nodes.push(pNode.right) && nextLevel++
        toBePrinted--
        if (toBePrinted === 0) {
            result.push(temp)
            toBePrinted = nextLevel
            nextLevel = 0
            temp = []
        }
    }
    return result
};
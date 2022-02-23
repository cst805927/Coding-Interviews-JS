/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
    if (!root) return []
    let path = []
    let currentSum = 0
    const result = []
    FindPath(root, target, path, currentSum, result)
    return result
};

function FindPath(pRoot, expectedSum, path, currentSum, result) {
    currentSum += pRoot.val
    path.push(pRoot.val)
    let isLeaf = !pRoot.left && !pRoot.right
    if (currentSum === expectedSum && isLeaf)
        result.push(path.slice())
    pRoot.left && FindPath(pRoot.left, expectedSum, path, currentSum, result)
    pRoot.right && FindPath(pRoot.right, expectedSum, path, currentSum, result)
    currentSum -= pRoot.val
    path.pop()
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const result = []
    Serialize(root, result)
    return result.join(',')

    function Serialize(root, result) {
        if (!root) {
            result.push('null')
            return
        }
        result.push(root.val)
        Serialize(root.left, result)
        Serialize(root.right, result)
    }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (!data.length) return null
    data = data.split(',')
    const index = {
        val: 0
    }
    const pRoot = Deserialize(index)
    return pRoot

    function Deserialize(index) {
        if (index.val > data.length) return null
        if (data[index.val] === 'null') {
            index.val++
            return null
        }
        const pRoot = new TreeNode()
        pRoot.val = data[index.val] - 0
        index.val++
        pRoot.left = Deserialize(index)
        pRoot.right = Deserialize(index)
        return pRoot
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
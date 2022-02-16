/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder)
        return null
    return ConstructCore(0, preorder.length - 1, 0, inorder.length - 1)

    function ConstructCore(startPreorder, endPreorder, startInorder, endInorder) {
        const rootValue = preorder[startPreorder]
        const root = new TreeNode()
        root.val = rootValue
        root.left = root.right = null
        if (startPreorder === endPreorder) {
            if (startInorder === endInorder &&
                preorder[startPreorder] === inorder[endInorder]) return root
        }
        const rootInorder = inorder.indexOf(rootValue)
        if (rootInorder === endInorder &&
            inorder[rootInorder] !== rootValue)
            return false
        const leftLength = rootInorder - startInorder
        const leftPreorderEnd = startPreorder + leftLength
        if (leftLength)
            root.left = ConstructCore(startPreorder + 1, leftPreorderEnd, startInorder, rootInorder)
        if (leftLength < endPreorder - startPreorder)
            root.right = ConstructCore(leftPreorderEnd + 1, endPreorder, rootInorder + 1, endInorder)
        return root
    }
};
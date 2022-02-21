/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    let result = false
    if (A && B) {
        if (Equal(A.val, B.val))
            result = DoesTree1HaveTree2(A, B)
        if (!result)
            result = isSubStructure(A.left, B)
        if (!result)
            result = isSubStructure(A.right, B)
    }
    return result
};

function DoesTree1HaveTree2(pRoot1, pRoot2) {
    if (!pRoot2) return true
    if (!pRoot1) return false
    if (!Equal(pRoot1.val, pRoot2.val)) return false
    return DoesTree1HaveTree2(pRoot1.left, pRoot2.left) && DoesTree1HaveTree2(pRoot1.right, pRoot2.right)
}

function Equal(num1, num2) {
    if (Math.abs(num1 - num2) < 0.0000001)
        return true
    else return false
}
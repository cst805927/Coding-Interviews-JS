/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    if (!postorder.length) return true
    const nLength = postorder.length
    const root = postorder[nLength - 1]
    let leftIndex = 0
    for (; leftIndex < nLength - 1; leftIndex++) {
        if (postorder[leftIndex] > root)
            break
    }
    let rightIndex = leftIndex
    for (; rightIndex < nLength - 1; rightIndex++) {
        if (postorder[rightIndex] < root)
            return false
    }
    let left = true
    if (leftIndex > 0)
        left = verifyPostorder(postorder.slice(0, leftIndex))
    let right = true
    if (leftIndex < nLength - 1)
        right = verifyPostorder(postorder.slice(leftIndex, nLength - 1))
    return (left && right)
};
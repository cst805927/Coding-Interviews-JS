/**
 * @param {number[]} nums
 * @return {number}
 */
let g_InvalidInput = false
var maxSubArray = function (nums) {
    if (!nums.length) {
        g_InvalidInput = true
        return 0
    }
    g_InvalidInput = false
    let nCurSum = 0
    let nGreatestSum = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nCurSum <= 0)
            nCurSum = nums[i]
        else nCurSum += nums[i]
        if (nCurSum > nGreatestSum)
            nGreatestSum = nCurSum
    }
    return nGreatestSum
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (!nums.length) return []
    let ahead = nums.length - 1
    let behind = 0
    while (ahead > behind) {
        let curSum = nums[behind] + nums[ahead]
        if (curSum === target) {
            return [nums[behind], nums[ahead]]
        } else if (curSum > target) ahead--
        else behind++
    }
    return []
};
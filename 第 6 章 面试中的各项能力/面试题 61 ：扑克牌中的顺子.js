/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    if (!nums.length) return false
    nums.sort((a, b) => a - b)
    let numberOfZero = 0
    let numberOfGap = 0
    for (let i = 0; i < nums.length && nums[i] === 0; i++) numberOfZero++
    let small = numberOfZero
    let big = small + 1
    while (big < nums.length) {
        if (nums[small] === nums[big])
            return false
        numberOfGap += nums[big] - nums[small] - 1
        small = big
        big++
    }
    return numberOfGap > numberOfZero ? false : true
};
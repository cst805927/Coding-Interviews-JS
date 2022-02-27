/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    if (!nums.length) return -1
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let middle = left + Math.floor((right - left) >> 1)
        if (nums[middle] !== middle) {
            if (middle === 0 || nums[middle - 1] === middle - 1) return middle
            right = middle - 1
        } else left = middle + 1
    }
    if (left === nums.length) return nums.length
    return -1
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var GetNumberSameAsIndex = function (nums) {
    if (!nums.length) return -1
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let middle = left + Math.floor((right - left) >> 1)
        if (nums[middle] === middle) return middle
        if (nums[middle] < middle) left = middle + 1
        else right = middle - 1
    }
    return -1
};
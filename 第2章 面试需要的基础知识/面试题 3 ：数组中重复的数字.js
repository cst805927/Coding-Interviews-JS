/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    if (!nums.length) return -1
    let start = 0
    let end = nums.length - 1
    while (end >= start) {
        let middle = start + Math.floor((end - start) >> 1)
        let count = countRange(nums, start, middle)
        console.log(start, middle, count)

        if (start === end) {
            if (count > 1) return start
            else break
        }
        if (count > (middle - start + 1))
            end = middle
        else start = middle + 1
    }
    return -1
};

function countRange(nums, start, end) {
    if (!nums.length) return 0
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= start && nums[i] <= end)
            count++
    }
    return count
}
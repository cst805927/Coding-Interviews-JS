/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    if (!nums.length) return null
    let result = nums[0]
    let times = 1
    for (let i = 1; i < nums.length; i++) {
        if (times === 0) {
            result = nums[i]
            times = 1
        } else if (nums[i] === result) times++
        else times--
    }
    if (!CheckMoreThanHalf(nums, result))
        return null
    return result
};

function CheckMoreThanHalf(numbers, number) {
    let times = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === number) times++
    }
    if (times * 2 <= numbers.length) return false
    return true
}
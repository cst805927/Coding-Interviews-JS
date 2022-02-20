/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    if (!nums.length) return []
    let pBegin = 0
    let pEnd = nums.length - 1
    while (pBegin < pEnd) {
        while (pBegin < pEnd && !isEven(nums[pBegin])) pBegin++
        while (pBegin < pEnd && isEven(nums[pEnd]))
            pEnd--
        if (pBegin < pEnd)
            [nums[pBegin], nums[pEnd]] = [nums[pEnd], nums[pBegin]]
    }
    return nums

    function isEven(number) {
        return (number & 1) === 0
    }
};
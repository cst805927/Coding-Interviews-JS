/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
    if (!nums.length) return null
    let resultExclusiveOR = 0
    for (let i = 0; i < nums.length; i++)
        resultExclusiveOR ^= nums[i]
    let indexOf1 = FindFirstBitIs1(resultExclusiveOR)
    let num1 = num2 = 0
    for (let i = 0; i < nums.length; i++) {
        if (IsBit1(nums[i], indexOf1))
            num1 ^= nums[i]
        else num2 ^= nums[i]
    }
    return [num1, num2]
};

function FindFirstBitIs1(num) {
    let indexBit = 0
    while (((num & 1) === 0)) {
        num = num >> 1
        indexBit++
    }
    return indexBit
}

function IsBit1(num, indexBit) {
    num = num >> indexBit
    return (num & 1)
}
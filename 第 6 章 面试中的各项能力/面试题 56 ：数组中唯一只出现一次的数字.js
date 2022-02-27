/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (!nums.length) return null
    let bitSum = Array(32).fill(0)
    for (let i = 0; i < nums.length; i++) {
        let bitMask = 1
        for (let j = 31; j >= 0; j--) {
            let bit = nums[i] & bitMask
            if (bit !== 0)
                bitSum[j] += 1
            bitMask = bitMask << 1
        }
    }
    let result = 0
    for (let i = 0; i < 32; i++) {
        result = result << 1
        result += bitSum[i] % 3
    }
    return result
};
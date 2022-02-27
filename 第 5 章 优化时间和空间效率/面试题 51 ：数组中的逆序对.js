/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    if (!nums.length) return 0
    const copy = Array.from(nums)
    let count = InversePairsCore(nums, copy, 0, nums.length - 1)
    delete copy
    return count
};

function InversePairsCore(data, copy, start, end) {
    if (start === end) {
        copy[start] = data[start]
        return 0
    }
    let length = Math.floor((end - start) >> 1)
    let left = InversePairsCore(copy, data, start, start + length)
    let right = InversePairsCore(copy, data, start + length + 1, end)
    let i = start + length
    let j = end
    let indexCopy = end
    let count = 0
    while (i >= start && j >= start + length + 1) {
        if (data[i] > data[j]) {
            copy[indexCopy--] = data[i--]
            count += j - start - length
        } else
            copy[indexCopy--] = data[j--]
    }
    for (; i >= start; i--)
        copy[indexCopy--] = data[i]
    for (; j >= start + length + 1; j--)
        copy[indexCopy--] = data[j]
    return left + right + count
}
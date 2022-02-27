/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let number = 0
    if (nums.length) {
        let first = GetFirstK(nums, target, 0, nums.length - 1)
        let last = GetLastK(nums, target, first, nums.length - 1)
        if (first > -1 && last > -1)
            number = last - first + 1
    }
    return number
};

function GetFirstK(data, k, start, end) {
    if (start > end) return -1
    let middleIndex = start + Math.floor((end - start) >> 1)
    let middleData = data[middleIndex]
    if (middleData === k) {
        if (middleIndex > 0 && data[middleIndex - 1] !== k || middleIndex === 0) return middleIndex
        else end = middleIndex - 1
    } else if (middleData > k)
        end = middleIndex - 1
    else start = middleIndex + 1
    return GetFirstK(data, k, start, end)
}

function GetLastK(data, k, start, end) {
    if (start > end) return -1
    let middleIndex = start + Math.floor((end - start) >> 1)
    let middleData = data[middleIndex]
    if (middleData === k) {
        if ((middleIndex < data.length - 1 && data[middleIndex + 1] !== k) || middleIndex === data.length - 1) return middleIndex
        else start = middleIndex + 1
    } else if (middleData < k)
        start = middleIndex + 1
    else end = middleIndex - 1
    return GetLastK(data, k, start, end)
}
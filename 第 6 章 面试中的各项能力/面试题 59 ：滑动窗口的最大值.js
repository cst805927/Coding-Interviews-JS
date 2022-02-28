/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const maxInWindows = []
    if (nums.length >= k && k >= 1) {
        const index = []
        for (let i = 0; i < k; i++) {
            while (index.length && nums[i] > nums[index[index.length - 1]]) index.pop()
            index.push(i)
        }
        for (let i = k; i < nums.length; i++) {
            maxInWindows.push(nums[index[0]])
            while (index.length && nums[i] > nums[index[index.length - 1]]) index.pop()
            if (index.length && index[0] <= (i - k)) index.shift()
            index.push(i)
        }
        maxInWindows.push(nums[index[0]])
    }
    return maxInWindows
};
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    if (target < 3) return []
    let small = 1
    let big = 2
    let middle = Math.floor((1 + target) >> 1)
    let curSum = small + big
    const result = []
    while (small < middle) {
        if (curSum === target)
            PrintContinuousSequence(small, big, result)
        while (curSum > target && small < middle) {
            curSum -= small
            small++
            if (curSum === target)
                PrintContinuousSequence(small, big, result)
        }
        big++
        curSum += big
    }
    return result
};

function PrintContinuousSequence(small, big, result) {
    const temp = []
    for (let i = small; i <= big; i++)
        temp.push(i)
    result.push(temp)
}
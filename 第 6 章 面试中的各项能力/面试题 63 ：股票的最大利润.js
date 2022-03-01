/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!prices.length) return 0
    let min = prices[0]
    let maxDiff = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] < min)
            min = prices[i - 1]
        const currDiff = prices[i] - min
        if (maxDiff < currDiff)
            maxDiff = currDiff
    }
    return maxDiff
};
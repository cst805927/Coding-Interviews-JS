/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if (n < 2) return 0
    if (n === 2) return 1
    if (n === 3) return 2
    let timesOf3 = Math.floor(n / 3)
    if (n - timesOf3 * 3 === 1)
        timesOf3 -= 1
    const timesOf2 = Math.floor((n - timesOf3 * 3) / 2)
    return Math.pow(3, timesOf3) * Math.pow(2, timesOf2)
};
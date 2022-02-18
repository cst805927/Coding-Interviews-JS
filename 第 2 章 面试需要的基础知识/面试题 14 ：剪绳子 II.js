/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if (n < 2) return 0
    if (n === 2) return 1
    if (n === 3) return 2
    const MOD = 1000000007
    let timesOf3 = Math.floor(n / 3)
    if (n - (timesOf3 * 3) === 1)
        timesOf3 -= 1
    const timesOf2 = Math.floor((n - timesOf3 * 3) / 2)
    return (pow(3, timesOf3, MOD) * pow(2, timesOf2, MOD)) % MOD
};

function pow(base, times, MOD) {
    let result = 1
    while (times > 0) {
        result = base * result % MOD
        times--
    }
    return result
}
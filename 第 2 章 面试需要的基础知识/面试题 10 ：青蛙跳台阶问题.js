/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    const res = [1, 1, 2]
    if (n <= 2) return res[n]
    const MOD = 1000000007
    let fibNMinusOne = 1,
        fibNMinusTwo = 2
    let fibN = 1
    for (let i = 3; i <= n; i++) {
        fibN = (fibNMinusOne + fibNMinusTwo) % MOD
        fibNMinusOne = fibNMinusTwo
        fibNMinusTwo = fibN
    }
    return fibN
};
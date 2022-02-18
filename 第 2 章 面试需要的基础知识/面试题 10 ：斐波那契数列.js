/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    const result = []
    result[0] = 0
    result[1] = 1
    if (n < 2) return result[n]
    let fibNMinusOne = 1
    let fibNMinusTwo = 0
    let fibN = 0
    const MOD = 1000000007
    for (let i = 2; i <= n; i++) {
        fibN = (fibNMinusOne + fibNMinusTwo) % MOD
        fibNMinusTwo = fibNMinusOne
        fibNMinusOne = fibN
    }
    return fibN
};
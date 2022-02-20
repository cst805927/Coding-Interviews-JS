/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
let g_InvalidInput = false
var myPow = function (x, n) {
    g_InvalidInput = false
    if (x === 0.0 && n < 0) {
        g_InvalidInput = true
        return 0.0
    }
    if (x === 1) return 1
    let absExponent = Math.abs(n)
    let result = PowerWithUnsignedExponent(x, absExponent)
    if (n < 0) result = 1.0 / result
    return result
};

function PowerWithUnsignedExponent(base, exponent) {
    if (exponent === 0) return 1
    if (exponent === 1) return base
    let result = PowerWithUnsignedExponent(base, exponent >>> 1)
    result *= result
    if (exponent & 1 === 1)
        result *= base
    return result
}
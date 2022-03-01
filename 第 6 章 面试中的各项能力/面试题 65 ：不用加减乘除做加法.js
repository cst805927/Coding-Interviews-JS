/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
    let sum, carry
    do {
        sum = a ^ b
        carry = (a & b) << 1
        a = sum
        b = carry
    } while (b)
    return a
};
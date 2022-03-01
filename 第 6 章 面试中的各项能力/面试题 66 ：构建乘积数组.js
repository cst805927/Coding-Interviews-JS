/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
    if (!a.length) return []
    const length = a.length
    const b = Array(length)
    b[0] = 1
    for (let i = 1; i < length; i++) {
        b[i] = b[i - 1] * a[i - 1]
    }
    let temp = 1
    for (let i = length - 2; i >= 0; i--) {
        temp *= a[i + 1]
        b[i] *= temp
    }
    return b
};
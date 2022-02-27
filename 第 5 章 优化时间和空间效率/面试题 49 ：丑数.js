/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    if (n <= 0) return 0
    let pUglyNumbers = Array(n)
    pUglyNumbers[0] = 1
    let nextUglyIndex = 1
    let pMultiply2 = 0
    let pMultiply3 = 0
    let pMultiply5 = 0
    while (nextUglyIndex < n) {
        let min = Math.min(pUglyNumbers[pMultiply2] * 2, pUglyNumbers[pMultiply3] * 3, pUglyNumbers[pMultiply5] * 5, )
        pUglyNumbers[nextUglyIndex] = min
        while (pUglyNumbers[pMultiply2] * 2 <= min)
            pMultiply2++
        while (pUglyNumbers[pMultiply3] * 3 <= min)
            pMultiply3++
        while (pUglyNumbers[pMultiply5] * 5 <= min)
            pMultiply5++
        nextUglyIndex++
    }
    const ugly = pUglyNumbers[n - 1]
    delete pUglyNumbers
    return ugly
};
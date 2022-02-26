/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
    if (n <= 0) return 0
    n = `${n}`
    return NumberOf1(n, 0)
};

function NumberOf1(strN, index) {
    if (!strN.length || strN[index] < '0' || strN[index] > '9') return 0
    let first = strN[index] - 0
    let nLength = strN.length - index
    if (nLength === 1 && first === 0) return 0
    if (nLength === 1 && first > 0) return 1
    let numFirstDigit = 0
    if (first > 1)
        numFirstDigit = Math.pow(10, nLength - 1)
    else if (first === 1)
        numFirstDigit = strN.slice(index + 1) - 0 + 1
    let numOtherDigits = first * (nLength - 1) * Math.pow(10, nLength - 2)
    let numRecursive = NumberOf1(strN, index + 1)
    return numFirstDigit + numOtherDigits + numRecursive
}
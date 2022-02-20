/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    if (n <= 0) return
    let number = Array(n)
    const result = []
    for (let i = 0; i < 10; i++) {
        number[0] = i
        Print1ToMaxOfNDigitsRecursively(number, n, 0, result)
    }
    delete number
    return result
};

function Print1ToMaxOfNDigitsRecursively(number, length, index, result) {
    if (index === length - 1) {
        PrintNumber(number, result)
        return
    }
    for (let i = 0; i < 10; i++) {
        number[index + 1] = i
        Print1ToMaxOfNDigitsRecursively(number, length, index + 1, result)
    }
}

function PrintNumber(number, result) {
    let isBeginning0 = true
    let nLength = number.length
    const temp = []
    for (let i = 0; i < nLength; i++) {
        if (isBeginning0 && number[i] !== 0)
            isBeginning0 = false
        if (!isBeginning0)
            temp.push(number[i])
    }
    temp.length && result.push(temp.join(''))
}
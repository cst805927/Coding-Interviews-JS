/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    if (n < n) return -1
    let digits = 1
    while (true) {
        let numbers = countOfIntegers(digits)
        if (n < numbers * digits)
            return digitsAtIndex(n, digits)
        n -= digits * numbers
        digits++
    }
    return -1
};

function countOfIntegers(digits) {
    if (digits === 1) return 10
    let count = Math.pow(10, digits - 1)
    return 9 * count
}

function digitsAtIndex(index, digits) {
    let number = BeginNumber(digits) + Math.floor(index / digits)
    let indexFromRight = digits - ((index === 0) ? digits : (index % digits))
    for (let i = 1; i < indexFromRight; i++) {
        number = Math.floor(number / 10)
    }
    return number % 10
}

function BeginNumber(digits) {
    if (digits === 1) return 0
    return Math.pow(10, digits - 1)
}
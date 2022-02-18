/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    if (!s.length) return ''
    let originalLength = s.length
    let numberOfBlank = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') numberOfBlank++
    }
    let newLength = originalLength + numberOfBlank * 2
    let indexOfOriginal = originalLength - 1
    let indexOfNew = newLength - 1
    s = s.split('')
    while (indexOfOriginal >= 0 && indexOfNew > indexOfOriginal) {
        if (s[indexOfOriginal] === ' ') {
            s[indexOfNew--] = '0'
            s[indexOfNew--] = '2'
            s[indexOfNew--] = '%'
        } else
            s[indexOfNew--] = s[indexOfOriginal]
        indexOfOriginal--
    }
    return s.join('')
};
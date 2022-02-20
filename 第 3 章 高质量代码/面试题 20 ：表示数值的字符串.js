/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    if (!s.length) return false
    s = s.trim()
    const strIndex = {
        index: 0
    }
    let numeric = scanInteger(strIndex)
    if (s[strIndex.index] === '.') {
        strIndex.index++
        numeric = scanUnsignedInteger(strIndex) || numeric
    }
    if (s[strIndex.index] === 'e' || s[strIndex.index] === 'E') {
        strIndex.index++
        numeric = numeric && scanInteger(strIndex)
    }
    return numeric && strIndex.index === s.length

    function scanUnsignedInteger(strIndex) {
        let before = strIndex.index
        while (strIndex.index !== s.length && s[strIndex.index] >= '0' && s[strIndex.index] <= '9') strIndex.index++
        return strIndex.index > before
    }

    function scanInteger(strIndex) {
        if (s[strIndex.index] === '+' || s[strIndex.index] === '-') {
            strIndex.index++
        }
        return scanUnsignedInteger(strIndex)
    }
};
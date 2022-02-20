/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (str, pattern) {
    return matchCore(0, 0)

    function matchCore(strIndex, patternIndex) {
        if (strIndex === str.length && patternIndex === pattern.length) return true
        if (strIndex !== str.length && patternIndex === pattern.length) return false
        if (pattern[patternIndex + 1] === '*') {
            if (pattern[patternIndex] === str[strIndex] || (pattern[patternIndex] === '.' && strIndex !== str.length))
                return matchCore(strIndex + 1, patternIndex + 2) ||
                    matchCore(strIndex + 1, patternIndex) ||
                    matchCore(strIndex, patternIndex + 2)
            else
                return matchCore(strIndex, patternIndex + 2)
        }
        if (str[strIndex] === pattern[patternIndex] || (pattern[patternIndex] === '.' && strIndex !== str.length))
            return matchCore(strIndex + 1, patternIndex + 1)
        return false
    }
};
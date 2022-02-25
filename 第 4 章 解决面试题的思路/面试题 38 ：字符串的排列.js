/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    if (!s.length) return []
    const result = []
    s = s.split('')
    Permutation(s, 0, result)
    return result
};

function Permutation(pStr, pBegin, result) {
    if (pBegin === pStr.length)
        !result.includes(pStr.join('')) && result.push(pStr.join(''))
    else {
        for (let i = pBegin; i < pStr.length; i++) {
            [pStr[i], pStr[pBegin]] = [pStr[pBegin], pStr[i]]
            Permutation(pStr, pBegin + 1, result)
            const temp = pStr[i]
            pStr[i] = pStr[pBegin]
            pStr[pBegin] = temp
        }
    }
}
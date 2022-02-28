/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    if (s.length) {
        s = s.split('')
        const nLength = s.length
        if (nLength && n > 0 && n < nLength) {
            let pFirstStart = 0
            let pFirstEnd = n - 1
            let pSecondStart = n
            let pSecondEnd = nLength - 1
            Reverse(s, pFirstStart, pFirstEnd)
            Reverse(s, pSecondStart, pSecondEnd)
            Reverse(s, pFirstStart, pSecondEnd)
        }
    }
    return s.join('')
};

function Reverse(s, start, end) {
    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]]
        start++
        end--
    }
}
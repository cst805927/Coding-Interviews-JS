/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    if (!s) return ''
    let result = s.trim().split(' ').filter(item => item !== '').reverse().join(' ')
    return result
}
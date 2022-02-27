/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let curLength = 0
    let maxLength = 0
    const position = new Map()
    for (let i = 0; i < s.length; i++) {
        let prevIndex = position.has(s[i]) ? position.get(s[i]) : -1
        if (prevIndex < 0 || i - prevIndex > curLength) curLength++
        else {
            if (curLength > maxLength)
                maxLength = curLength
            curLength = i - prevIndex
        }
        position.set(s[i], i)
    }
    if (curLength > maxLength)
        maxLength = curLength
    delete position
    return maxLength
};
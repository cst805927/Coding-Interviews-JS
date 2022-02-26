/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
    if (!nums.length) return ''
    let strNumbers = Array.from(nums)
    strNumbers.sort(compare)
    return strNumbers.join('')
};

function compare(strNumber1, strNumber2) {
    const g_strCombine1 = parseInt(`${strNumber1}${strNumber2}`)
    const g_strCombine2 = parseInt(`${strNumber2}${strNumber1}`)
    return (g_strCombine1 - g_strCombine2)
}
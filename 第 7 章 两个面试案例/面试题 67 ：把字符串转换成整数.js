/**
 * @param {string} str
 * @return {number}
 */
const Status = {
    kValid: 0,
    kInvalid: 1
}
let g_nStatus = Status.kValid
const INT_MAX = Math.pow(2, 31) - 1
const INT_MIN = -1 * Math.pow(2, 31)
var strToInt = function (str) {
    str = str.trim()
    g_nStatus = Status.kInvalid
    let num = 0
    let index = 0
    if (str.length) {
        let minus = false
        if (str[index] === '+') index++
        else if (str[index] === '-') {
            index++
            minus = true
        }
        if (index !== str.length)
            num = StrToIntCore(str, minus, index)
    }
    return num
};

function StrToIntCore(digit, minus, index) {
    let num = 0
    while (index !== digit.length) {
        if (digit[index] >= '0' && digit[index] <= '9') {
            let flag = minus ? -1 : 1
            num = num * 10 + flag * (digit[index] - 0)
            if ((!minus && num > INT_MAX) || num < INT_MIN) {
                num = minus ? INT_MIN : INT_MAX
                break
            }
            index++
        } else break
    }
    if (index === digit.length)
        g_nStatus = Status.kValid
    return num
}
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    let numberInString = num.toString()
    return GetTranslationCount(numberInString)
};

function GetTranslationCount(number) {
    const length = number.length
    const counts = Array(length).fill(0)
    let count = 0
    for (let i = length - 1; i >= 0; i--) {
        count = 0
        if (i < length - 1) count = counts[i + 1]
        else count = 1
        if (i < length - 1) {
            let digit1 = number[i] - 0
            let digit2 = number[i + 1] - 0
            let converted = digit1 * 10 + digit2
            if (converted >= 10 && converted <= 25) {
                if (i < length - 2)
                    count += counts[i + 2]
                else count += 1
            }
        }
        counts[i] = count
    }
    count = counts[0]
    delete counts
    return count
}
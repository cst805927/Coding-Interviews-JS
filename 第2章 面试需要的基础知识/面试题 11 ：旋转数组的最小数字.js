/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    if (!numbers.length) return null
    let index1 = 0
    let index2 = numbers.length - 1
    let indexMid = index1
    while (numbers[index1] >= numbers[index2]) {
        if (index2 - index1 === 1) {
            indexMid = index2
            break
        }
        indexMid = index1 + Math.floor((index2 - index1) >> 1)
        if (numbers[index1] === numbers[index2] &&
            numbers[indexMid] === numbers[index1])
            return MinInOrder(numbers, index1, index2)
        if (numbers[indexMid] >= numbers[index1])
            index1 = indexMid
        if (numbers[indexMid] <= numbers[index2])
            index2 = indexMid
    }
    return numbers[indexMid]
};

function MinInOrder(numbers, index1, index2) {
    let result = numbers[index1]
    for (let i = index1; i <= index2; i++) {
        if (result > numbers[i])
            result = numbers[i]
    }
    return result
}
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    if (!arr.length || k > arr.length || k < 0) return []
    let start = 0
    let end = arr.length - 1
    let index = Partition(arr, start, end)
    while (index !== k - 1) {
        if (index > k - 1) {
            end = index - 1
            index = Partition(arr, start, end)
        } else if (index < k - 1) {
            start = index + 1
            index = Partition(arr, start, end)
        }
    }
    return arr.slice(0, k)
};

function Partition(arr, start, end) {
    if (!arr.length || start < 0 || end >= arr.length || start > end) return -1
    let index = Math.floor(Math.random() * (end - start + 1) + start);
    [arr[index], arr[end]] = [arr[end], arr[index]]
    let small = start - 1
    for (index = start; index < end; index++) {
        if (arr[index] < arr[end]) {
            small++
            if (small !== index)
                [arr[small], arr[index]] = [arr[index], arr[small]]
        }
    }
    small++;
    [arr[end], arr[small]] = [arr[small], arr[end]]
    return small
}
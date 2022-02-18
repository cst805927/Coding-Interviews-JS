/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    if (k < 0 || m < 0 || n < 0) return 0
    const visited = Array(m).fill(0).map(() => Array(n).fill(false))
    const count = movingCountCore(k, m, n, 0, 0, visited)
    delete visited
    return count
};

function movingCountCore(k, rows, cols, row, col, visited) {
    let count = 0
    if (check(k, rows, cols, row, col, visited)) {
        visited[row][col] = true
        count = 1 + movingCountCore(k, rows, cols, row - 1, col, visited) +
            movingCountCore(k, rows, cols, row + 1, col, visited) +
            movingCountCore(k, rows, cols, row, col - 1, visited) +
            movingCountCore(k, rows, cols, row, col + 1, visited)
    }
    return count
}

function check(k, rows, cols, row, col, visited) {
    if (row >= 0 && row < rows && col >= 0 && col < cols && !visited[row][col] && getDigitSum(row) + getDigitSum(col) <= k) return true
    return false
}

function getDigitSum(number) {
    let sum = 0
    while (number > 0) {
        sum += number % 10
        number = Math.floor(number / 10)
    }
    return sum
}
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length || !matrix[0].length)
        return []
    let start = 0
    const result = []
    const rows = matrix.length
    const columns = matrix[0].length
    while (columns > start * 2 && rows > start * 2) {
        PrintMatrixInCircle(matrix, start, result, rows, columns)
        start++
    }
    return result
};

function PrintMatrixInCircle(matrix, start, result, rows, columns) {
    let endX = columns - 1 - start
    let endY = rows - 1 - start
    for (let i = start; i <= endX; i++)
        result.push(matrix[start][i])
    if (start < endY) {
        for (let i = start + 1; i <= endY; i++)
            result.push(matrix[i][endX])
    }
    if (start < endY && start < endX) {
        for (let i = endX - 1; i >= start; i--)
            result.push(matrix[endY][i])
    }
    if (start < endY - 1 && start < endX) {
        for (let i = endY - 1; i > start; i--)
            result.push(matrix[i][start])
    }
}
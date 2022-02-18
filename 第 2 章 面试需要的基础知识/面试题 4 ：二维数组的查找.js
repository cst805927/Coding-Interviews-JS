/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    let found = false
    let rows = matrix.length && matrix.length
    let columns = rows && matrix[0].length
    if (rows > 0 && columns > 0) {
        let row = 0
        let column = columns - 1
        while (row < rows && column >= 0) {
            if (matrix[row][column] === target) {
                found = true
                break
            } else if (matrix[row][column] > target)
                column--
            else row++
        }
    }
    return found
};
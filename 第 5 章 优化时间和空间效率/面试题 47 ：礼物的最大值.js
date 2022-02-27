/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    if (!grid.length || !grid[0].length) return 0
    const rows = grid.length
    const cols = grid[0].length
    const maxValues = Array(cols).fill(0)
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let left = 0
            let up = 0
            if (row > 0)
                up = maxValues[col]
            if (col > 0)
                left = maxValues[col - 1]
            maxValues[col] = Math.max(left, up) + grid[row][col]
        }
    }
    const maxValue = maxValues[cols - 1]
    delete maxValues
    return maxValue
};
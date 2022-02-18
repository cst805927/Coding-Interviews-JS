/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (!board.length || !board[0].length || !word.length)
        return false
    const visited = Array(board.length).fill(0).map(() => Array(board[0].length).fill(false))
    let pathLength = 0
    const rows = board.length
    const cols = board[0].length
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (hasPathCore(board, row, col, word, visited, pathLength)) return true
        }
    }
    delete visited
    return false
};

function hasPathCore(board, row, col, word, visited, pathLength) {
    if (pathLength === word.length) return true
    let hasPath = false
    const rows = board.length
    const cols = board[0].length
    if (row >= 0 && row < rows && col >= 0 && col < cols && !visited[row][col] && board[row][col] === word[pathLength]) {
        pathLength++
        visited[row][col] = true
        hasPath = hasPathCore(board, row + 1, col, word, visited, pathLength) ||
            hasPathCore(board, row - 1, col, word, visited, pathLength) ||
            hasPathCore(board, row, col + 1, word, visited, pathLength) ||
            hasPathCore(board, row, col - 1, word, visited, pathLength)
        if (!hasPath) {
            pathLength--
            visited[row][col] = false
        }
    }
    return hasPath
}
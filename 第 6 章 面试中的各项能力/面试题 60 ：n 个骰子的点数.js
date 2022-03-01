/**
 * @param {number} n
 * @return {number[]}
 */
const g_maxValue = 6
var dicesProbability = function (n) {
    if (n < 1) return
    const pProbabilities = Array(2).fill(0).map(() => Array(g_maxValue * n + 1).fill(0))
    let flag = 0
    pProbabilities[flag].fill(1, 1, g_maxValue + 1)
    for (let k = 2; k <= n; k++) {
        pProbabilities[1 - flag].fill(0, 0, k)
        for (let i = k; i <= g_maxValue * k; i++) {
            pProbabilities[1 - flag][i] = 0
            for (let j = 1; j <= i && j <= g_maxValue; j++)
                pProbabilities[1 - flag][i] += pProbabilities[flag][i - j]
        }
        flag = 1 - flag
    }
    let total = Math.pow(g_maxValue, n)
    const result = []
    for (let i = n; i <= g_maxValue * n; i++) {
        const ratio = pProbabilities[flag][i] / total
        result.push(ratio)
    }
    delete pProbabilities
    return result
};
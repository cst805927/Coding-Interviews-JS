/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    if (!s.length) return ' '
    const tableSize = 256
    const hashTable = Array(tableSize).fill(0)
    let pHashKey = 0
    while (pHashKey !== s.length)
        hashTable[s.charCodeAt(pHashKey++)]++
    pHashKey = 0
    while (pHashKey !== s.length) {
        if (hashTable[s.charCodeAt(pHashKey)] === 1)
            return s[pHashKey]
        pHashKey++
    }
    return ' '
};
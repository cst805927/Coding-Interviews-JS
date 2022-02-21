/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let bPossible = false
    let pNextPush = 0
    let pNextPop = 0
    const nLength = pushed.length
    const stackData = []
    while (pNextPop < nLength) {
        while (!stackData.length ||
            stackData[stackData.length - 1] !== popped[pNextPop]) {
            if (pNextPush === nLength)
                break
            stackData.push(pushed[pNextPush])
            pNextPush++
        }
        if (stackData[stackData.length - 1] !== popped[pNextPop]) break
        stackData.pop()
        pNextPop++
    }
    if (!stackData.length && pNextPop === nLength) bPossible = true
    return bPossible
};
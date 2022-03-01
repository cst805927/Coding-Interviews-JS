/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
    let res = 0;
    const sum = (num) => {
        num > 1 && sum(num - 1);
        res += num;
        return res;
    }
    sum(n);
    return res;
};
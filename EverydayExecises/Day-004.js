/**
 * 343. 整数拆分
 * https://leetcode-cn.com/problems/integer-break/
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    let max = 1;
    if (n === 2 || n === 3) return n - 1;

    for (; n > 4; n = n - 3) {
        max = max * 3;
    }
    return max * n;
};

const integerBreak = function (n) {
    let max = 1;
    if (n === 2 || n === 3) return n - 1;

    for (; n > 4; n = n - 3) {
        max = max * 3;
    }
    return max * n;
}
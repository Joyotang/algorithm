/**
 * 201. 数字范围按位与
 * https://leetcode-cn.com/problems/bitwise-and-of-numbers-range/
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    while (m < n) {
        // 抹去最右边的 1
        n = n & (n - 1);
    }
    return n;
};
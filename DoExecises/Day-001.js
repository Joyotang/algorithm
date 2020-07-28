/**
 * 70.爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = [];

    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
       dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};



/**
 * 392. 判断子序列
 * @param {*} s 
 * @param {*} t 
 */
var isSubsequence = function(s, t) {
    let sStack = s.split('');
    let tArray = t.split('');

    for (let i = 0; i < tArray.length; i++) {
        if (tArray[i] === sStack[0]) {
            sStack.shift();
        }

        if (sStack.length === 0) {
            return true;
        }
    }
    if (sStack.length === 0) {
        return true;
    }
    return false;
};
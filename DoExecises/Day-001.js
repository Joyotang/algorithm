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




/* -----------------------------------Day2 Code------------------------------------- */
function climbStairs(n) {
    if (n < 2) return n;
    let f1 = 1;
    let f2 = 2;
    let f3 = 3;
    for (let i = 2; i < n; i++) {
        f1 = (i - 1) + (i - 2);

        f2 = f1;
        f3 = f2;
    }
    return f2 + f3;
}

function climbStairs(n) {
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}


function isSubSeq(s, t) {
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
}
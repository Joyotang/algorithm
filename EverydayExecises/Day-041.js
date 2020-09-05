/**
 * 60. 第k个排列
 * https://leetcode-cn.com/problems/permutation-sequence/
 * 回溯：基本版
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let res = [];
    let used = {};
    let nums = [];
    for (let i = n; i > 0; i--) {
        nums[i - 1] = i;
    }

    function backtrack(index, path) {
        if (path.length === n) {
            let numStrs = path.join('');
            res.push(numStrs);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (used[i]) continue;
            
            used[i] = true;
            path.push(nums[i]);
            backtrack(index + 1, path);

            path.pop();
            used[i] = false;
        }
    }

    backtrack(0, []);
    return res[k - 1];
};


/**
 * 60. 第k个排列
 * https://leetcode-cn.com/problems/permutation-sequence/
 * 回溯 + 剪枝：基本版（时间复杂度：O(n!)）
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let count = 0;
    let used = {};

    function backtrack(path) {
        if (path.length === n) {
            count++;
            if (count === k) {
               return path.join('');
            }
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (used[i]) continue;
            
            used[i] = true;
            path.push(i);
            let res = backtrack(path);

            path.pop();
            used[i] = false;

            if (res) return res;
        }
    }
    return backtrack([]);
};


/**
 * TODO
 * https://leetcode-cn.com/problems/permutation-sequence/solution/shou-hua-tu-jie-jing-dian-de-dfshui-su-shu-xue-gui/
 * 
 * 60. 第k个排列
 * https://leetcode-cn.com/problems/permutation-sequence/
 * 回溯 + 剪枝：优化版（时间复杂度：O(n^2)）
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    
};






/**
 * 32. 最长有效括号
 * https://leetcode-cn.com/problems/longest-valid-parentheses/
 * 
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxLen = 0;
    let n = s.length;
    let dp = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                if (i - 2 >= 0) {
                    dp[i] = dp[i - 2] + 2;
                } else {
                    dp[i] = 2;
                }
            } else if (s[i - dp[i - 1] - 1] === '(') {
                if (i - dp[i - 1] - 2 >= 0) {
                    dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
                } else {
                    dp[i] = dp[i - 1] + 2;
                }
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }
    return maxLen;
};




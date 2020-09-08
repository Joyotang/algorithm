/**
 * 486. 预测赢家
 * https://leetcode-cn.com/problems/predict-the-winner/
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    const len = nums.length;
    const dp = new Array(len);

    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len);
    }

    // 对角线填充数值
    for (let i = 0; i < len; i++) {
        dp[i][i] = nums[i];
    }

    for (let i = len - 2; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            const pickI = nums[i] - dp[i + 1][j];
            const pickJ = nums[j] - dp[i][j - 1];
            dp[i][j] = Math.max(pickI, pickJ);
        }
    }
    return dp[0][len - 1] >= 0;
};


/* -----------------------------------The next day coding.------------------------------------- */
var PredictTheWinner = function(nums) {
    function helper(i, j) {
        if (i === j) {
            return nums[i];
        }
        
        let pickI = nums[i] - helper(i + 1, j); // 选择左边
        let pickJ = nums[i] - helper(i, j - 1); // 选择右边
        return Math.max(pickI, pickJ);
    }
    return helper(0, nums.length - 1) >= 0;
};


var PredictTheWinner = function(nums) {
    let n = nums.length;
    let dp = Array.from(new Array(n), () => new Array(n));

    // base case（将基本数值填充对角线）
    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            const pickI = nums[i] - dp[i + 1][j];
            const pickJ = nums[j] - dp[i][j - 1];
            dp[i][j] = Math.max(pickI, pickJ);
        }
    }
    return dp[0][n - 1] >= 0;
};




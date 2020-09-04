/**
 * 53. 最大子序和
 * https://leetcode-cn.com/problems/maximum-subarray/
 * 解法一：动态规划法
 * 时间复杂度：O(N) 空间复杂度：O(N)
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let n = nums.length;
    if (!n) return 0;
    
    let dp = nums;
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    }
    return Math.max(...dp);
}


/**
 * 解法一：动态规划法 - 优化版
 * 时间复杂度：O(N) 空间复杂度：O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let pre = 0;
    let maxAns = nums[0];
    
    for (let i = 0; i < nums.length; i++) {
        pre = Math.max(pre + nums[i], nums[i]);
        maxAns = Math.max(pre, maxAns);
    }
    return maxAns;
}

/* -----------------------------------The next day coding.------------------------------------- */
var maxSubArray = function(nums) {
    let pre = 0;
    let maxAns = nums[0];

    for (let i = 0; i < nums.length; i++) {
        pre = Math.max(pre + nums[i], nums[i]);
        maxAns = Math.max(pre, maxAns);
    }
    return maxAns;
}



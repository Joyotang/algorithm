/**
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
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
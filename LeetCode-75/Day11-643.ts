function findMaxAverage(nums: number[], k: number): number {
    let currentSum = 0;
    let maxSum = 0;
    // 计算前缀和
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }
    maxSum = currentSum;
    // 滑动窗口
    for (let i = k; i < nums.length; i++) {
        // 减去窗口左侧元素，加上窗口右侧元素
        currentSum = currentSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    // 计算最大平均数
    return maxSum / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

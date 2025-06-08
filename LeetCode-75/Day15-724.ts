function pivotIndex(nums: number[]): number {
    let totalSum = 0; // 用于存储整个数组的总和
    let leftSum = 0; // 用于存储当前下标左边的元素之和

    // 计算数组的总和
    for (let num of nums) {
        totalSum += num;
    }

    // 遍历数组，寻找中心下标
    for (let i = 0; i < nums.length; i++) {
        // 如果左边的和等于右边的和，则返回当前下标
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        // 更新左边的和，加上当前元素
        leftSum += nums[i];
    }

    // 如果没有找到中心下标，返回 -1
    return -1;
}

// 示例
const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums)); // 输出：3

function longestOnes(nums: number[], k: number): number {
    let left = 0; // 左指针，表示滑动窗口的左边界
    let maxCount = 0; // 用于记录最长连续1的子数组长度
    let zeroCount = 0; // 用于记录当前窗口内0的数量

    // 遍历数组，right表示滑动窗口的右边界
    for (let right = 0; right < nums.length; right++) {
        // 如果当前元素是0，增加0的计数
        if (nums[right] === 0) {
            zeroCount++;
        }

        // 如果当前窗口内的0的数量超过了k，需要缩小窗口
        while (zeroCount > k) {
            // 如果左边界指向的元素是0，说明这个0即将移出窗口，需要减少0的计数
            if (nums[left] === 0) {
                zeroCount--;
            }
            // 移动左边界，缩小窗口范围
            left++;
        }

        // 更新最长连续1的子数组长度
        // 当前窗口的长度为 right - left + 1
        maxCount = Math.max(maxCount, right - left + 1);
    }

    // 返回最终结果
    return maxCount;
}

// 示例
const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;
console.log(longestOnes(nums, k)); // 输出：6

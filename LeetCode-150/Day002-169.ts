const nums = [3, 2, 3];

/**
 * 摩尔投票法
 * 1. 初始化计数器 count 为 1，候选元素 candidate 为 nums[0]
 * 2. 遍历数组 nums，对于每个元素 num：
 * 3. 如果 count 为 0，则将 candidate 更新为当前元素 num
 * 4. 如果 num 等于 candidate，则将 count 加 1https://leetcode.cn/problems/majority-element/
 * 5. 否则，将 count 减 1
 * 6. 遍历结束后，candidate 即为多数元素
 */
function majorityElement(nums: number[]): number {
    let count = 1;
    let candidate = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        if (count === 0) {
            candidate = num;
        }
        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}

console.log(majorityElement(nums));

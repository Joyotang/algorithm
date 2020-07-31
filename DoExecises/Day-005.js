/**
 * 面试题 08.03. 魔术索引
 * https://leetcode-cn.com/problems/magic-index-lcci/
 * @param {number[]} nums
 * @return {number}
 */
// 1. 暴力法
var findMagicIndex = function(nums) {
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        if(i === nums[i]) {
            return i;
        }
    }
    return -1;
};
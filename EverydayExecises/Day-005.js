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




/**
 * 1. 两数之和
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let res = target - nums[i];
        if (map.has(res)) {
            return [map.get(res), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
}
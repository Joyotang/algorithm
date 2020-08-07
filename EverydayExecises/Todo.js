/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {};
    let max = 0;
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        } 
    }
    for (const key in hash) {
        if (k > 0) {
            if (hash[key] > max) {
                max = hash[key]
            }
        }
    }
};


// https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
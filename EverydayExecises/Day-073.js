/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    let set = new Set();
    let min = 14;
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (nums[i] === 0) continue;
        
        if (set.has(num)) return false;
        set.add(num);
        max = Math.max(max, num);
        min = Math.min(min, num);
    }
    return max - min + 1 <= 5;
};
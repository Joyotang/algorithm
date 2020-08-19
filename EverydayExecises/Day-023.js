/**
 * 55. 跳跃游戏
 * https://leetcode-cn.com/problems/jump-game/
 * 
 * 贪心算法（思路一）
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let endReachable = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        console.log('i:', i)
        console.log('i + nums[i]:', i + nums[i])
        if (i + nums[i] >= endReachable) {
            endReachable = i;
            console.log('endReachable:', endReachable)
        }
    }
    return endReachable === 0;
};

// [2,3,1,1,4] true
// [3,2,1,0,4] false

console.log(canJump([3,2,1,0,4]))

/**
 * 贪心算法（思路二）
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n = nums.length;
    let rightmost = 0;
    for (let i = 0; i < n; i++) {
        console.log('i:', i);
        if (i <= rightmost) {
            console.log('rightmost:', rightmost)
            console.log('i + nums[i]:', i + nums[i])
            rightmost = Math.max(rightmost, i + nums[i]);
            
            if (rightmost >= n - 1) return true;
        }
    }
    return false;
};


/**
 * 贪心算法（思路三）
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n = nums.length;
    let rightmost = 0;
    for (let i = 0; i < n; i++) {
        if (i > rightmost) return false;
        rightmost = Math.max(rightmost, i + nums[i]);
    }
    return true;
};

console.log(canJump([3,2,1,0,4]))


/* -----------------------------------The next day coding.------------------------------------- */
/**
 * 跳跃游戏：贪心算法（思路一）
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n = nums.length;
    let endReachable = n - 1;
    for (let i = n - 1; i >= 0; i--) {
        if (i + nums[i] >= endReachable) {
            endReachable = i;
        }
    }
    return endReachable === 0;
};
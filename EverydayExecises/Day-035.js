/**
 * 45. 跳跃游戏 II
 * https://leetcode-cn.com/problems/jump-game-ii/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n = nums.length - 1;
    let steps = 0;
    let now = 0;
    let endPos = 0;
    let maxPosition = 0;

    while (endPos < n) {
        maxPosition = Math.max(maxPosition, now + nums[now]);
        if (now === endPos) {
            steps++;
            endPos = maxPosition;
        }
        now++;
    }
    return steps;
};
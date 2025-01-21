const nums = [2, 3, 1, 1, 4];

function canJump(nums: number[]): boolean {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        if (maxReach >= nums.length) return true;
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return true;
}
console.log(canJump(nums));

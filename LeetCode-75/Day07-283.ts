/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            nums[slow++] = nums[fast];
        }
    }
    for (let i = slow; i < nums.length; i++) {
        nums[i] = 0;
    }
}

console.log(moveZeroes([0, 1, 0, 3, 12]));

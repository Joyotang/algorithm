const nums = [1, 1, 1, 2, 2, 3];

function removeDuplicates(nums: number[]): number {
    let i = 0;
    let j = 2;
    while (j < nums.length) {
        if (nums[i] !== nums[j]) {
            nums[++i + 1] = nums[j];
        }
        j++;
    }
    return i + 2;
}

console.log(removeDuplicates(nums));

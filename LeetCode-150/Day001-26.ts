function removeDuplicates(nums: number[]): number {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index++] = nums[i];
        }
    }
    return index;
}

const arr = [1, 1, 2];

console.log(removeDuplicates(arr));

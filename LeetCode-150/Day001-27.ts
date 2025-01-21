function removeElement(nums: number[], val: number): number {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index++] = nums[i];
        }
    }
    return index;
};

const arr = [3, 2, 2, 3];
const val = 3;

console.log(removeElement(arr, val));

const nums = [1, 2, 3, 4];

function productExceptSelf(nums: number[]): number[] {
    let n = nums.length;
    let res = new Array(n).fill(0);
    // left表示当前位置左边所有数的乘积,初始为1表示最左边没有数可乘，相当于首次跳过自己进行乘积，因为乘以1还是原数
    let left = 1;
    // right表示当前位置右边所有数的乘积,初始为1表示最右边没有数可乘，相当于首次跳过自己进行乘积，因为乘以1还是原数
    let right = 1;
    // 第一次遍历:从左往右,计算每个位置左边所有数的乘积
    for (let i = 0; i < n; i++) {
        res[i] = left;
        left *= nums[i];
    }
    // 第二次遍历:从右往左,res[i]乘以右边所有数的乘积
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }
    return res;
}

console.log(productExceptSelf(nums));

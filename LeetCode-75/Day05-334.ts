function increasingTriplet(nums: number[]): boolean {
    const n = nums.length;
    if (n < 3) return false;

    let first = nums[0];
    let second = Infinity;
    for (let i = 1; i < n; i++) {
        const num = nums[i];
        // 如果 num 小于等于 first，则更新 first，这样始终保持 first 是最小值；
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            // 否则，如果 num 大于 first 但小于等于 second，则更新 second；此时 second 是比 first 大的次小值。
            second = num;
        } else {
            // 如果 num 大于 second，说明找到了一个递增的三元组，返回 true；
            return true;
        }
    }
    return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5]));

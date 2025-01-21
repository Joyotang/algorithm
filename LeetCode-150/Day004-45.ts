const nums = [2, 3, 1, 1, 4];

function jump(nums: number[]): number {
    let end = 0;
    let maxPosition = 0;
    let steps = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i]);
        if (i === end) {
            end = maxPosition;
            steps++;
        }
    }
    return steps;
}
console.log(jump(nums));

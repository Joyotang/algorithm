function maxOperations(nums: number[], k: number): number {
    const countMap = new Map();
    let pairCount = 0;
    for (const num of nums) {
        const complement = k - num;
        if (countMap.get(complement) > 0) {
            pairCount++;
            // 减少 complement 的计数，表示这个 complement 已经被用掉了一个
            countMap.set(complement, countMap.get(complement) - 1);
        } else {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }
    }
    return pairCount;
}

console.log(maxOperations([1, 2, 3, 4], 5));

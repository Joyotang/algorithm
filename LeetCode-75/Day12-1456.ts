function maxVowels(s: string, k: number): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxCount = 0;
    let currentCount = 0;

    // 初始化第一个窗口
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            currentCount++;
        }
    }
    maxCount = currentCount;

    // 滑动窗口
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            currentCount++;
        }
        if (vowels.has(s[i - k])) {
            currentCount--;
        }
        maxCount = Math.max(maxCount, currentCount);
    }

    return maxCount;
}

// 示例
const s = 'abciiidef';
const k = 3;
console.log(maxVowels(s, k)); // 输出：3

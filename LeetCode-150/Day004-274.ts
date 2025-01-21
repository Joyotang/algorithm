// 难（记住思路就行）
function hIndex(citations: number[]): number {
    let n = citations.length;
    let cnt = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        cnt[Math.min(citations[i], n)]++;
    }
    let sum = 0;
    for (let i = n; i >= 0; i--) {
        sum += cnt[i];
        if (sum >= i) return i;
    }
    return 0;
}

const citations = [3, 0, 6, 1, 5];

console.log(hIndex(citations));

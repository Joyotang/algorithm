function largestAltitude(gain: number[]): number {
    let currentAltitude = 0; // 当前海拔，从0开始
    let maxAltitude = 0; // 用于记录最高海拔

    // 遍历数组，计算每次移动后的海拔
    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i]; // 更新当前海拔
        maxAltitude = Math.max(maxAltitude, currentAltitude); // 更新最高海拔
    }

    return maxAltitude; // 返回最高海拔
}

// 示例
const gain = [1, -3, 5, 2];
console.log(largestAltitude(gain)); // 输出：5

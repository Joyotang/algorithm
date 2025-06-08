function maxArea(height: number[]): number {
    let maxArea = 0; // 用于存储最大水量
    let left = 0; // 左指针
    let right = height.length - 1; // 右指针

    while (left < right) {
        const width = right - left; // 宽度
        const area = Math.min(height[left], height[right]) * width; // 面积
        maxArea = Math.max(maxArea, area); // 更新最大面积
        // 移动较短的线的指针
        if (height[left] < height[right]) {
            left++; // 左边的线较短，移动左指针
        } else {
            right--; // 右边的线较短，移动右指针
        }
    }
    return maxArea;
}

// 示例
const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(heights)); // 输出：49

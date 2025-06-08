function findDifference(nums1: number[], nums2: number[]): number[][] {
    // 创建两个集合来存储数组中的元素
    const set1 = new Set(nums1); // 存储 nums1 的元素
    const set2 = new Set(nums2); // 存储 nums2 的元素

    // 用于存储结果的数组
    const result: number[][] = [[], []];

    // 找出 nums1 中存在但不在 nums2 中的元素
    for (const num of set1) {
        if (!set2.has(num)) {
            result[0].push(num); // 添加到结果的第一个数组
        }
    }

    // 找出 nums2 中存在但不在 nums1 中的元素
    for (const num of set2) {
        if (!set1.has(num)) {
            result[1].push(num); // 添加到结果的第二个数组
        }
    }

    return result; // 返回最终结果
}

// 示例
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
console.log(findDifference(nums1, nums2)); // 输出：[[1, 3], [4, 6]]

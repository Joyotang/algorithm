function uniqueOccurrences(arr: number[]): boolean {
    const countMap = new Map<number, number>(); // 用于记录每个数字的出现次数

    // 第一步：统计每个数字的出现次数
    for (const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // 第二步：将所有出现次数放入一个集合中
    const occurrences = new Set<number>();
    // 利用Set去重，如果存在两个或多个数字的出现次数相同，那么 Set 中的元素数量将小于 countMap 中的键的数量，因为集合会去掉重复的出现次数。
    for (const count of countMap.values()) {
        occurrences.add(count);
    }

    // 第三步：判断出现次数是否都是独一无二的
    // 如果集合的大小与出现次数的总数相同，说明没有重复的出现次数；
    return occurrences.size === countMap.size;
}

// 示例
const arr1 = [1, 2, 2, 3, 3, 3];
console.log(uniqueOccurrences(arr1)); // 输出：true

const arr2 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(uniqueOccurrences(arr2)); // 输出：false

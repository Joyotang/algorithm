/**
 * 679. 24 点游戏
 * https://leetcode-cn.com/problems/24-game/
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
const judgePoint24 = (nums) => {
    const len = nums.length;
    if (len == 1) { // 递归的出口，剩一个数，处理一下精度丢失的问题
        const diff = nums[0] - 24;
        return Math.abs(diff) < 0.00001;
    }
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const copyNums = nums.slice(); // 拷贝一份原数组
            copyNums.splice(j, 1); // 先删除索引大的数字
            copyNums.splice(i, 1); // 这样才不会影响索引小的数字的位置

            let n1 = nums[i];
            let n2 = nums[j];
            let isValid = false; // 这是一个标识变量
            // 一旦返回了true，isValid就会控制不会进入递归，否则会继续递归
            isValid = isValid || judgePoint24(copyNums.concat(n1 + n2));
            // 减 与 被减
            isValid = isValid || judgePoint24(copyNums.concat(n1 - n2));
            isValid = isValid || judgePoint24(copyNums.concat(n2 - n1));
            // 乘
            isValid = isValid || judgePoint24(copyNums.concat(n1 * n2));
            if (n2 !== 0) { // 除
                isValid = isValid || judgePoint24(copyNums.concat(n1 / n2));
            }
            if (n1 !== 0) { // 被除
                isValid = isValid || judgePoint24(copyNums.concat(n2 / n1));
            }
            if (isValid) return true; // 一旦递归返回了true，isValid就是true，返回它
        }
    }
    return false; // 始终都不能返回true，则返回false
};
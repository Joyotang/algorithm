


/**
 * 415. 字符串相加
 * https://leetcode-cn.com/problems/add-strings/
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num1) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let ans = [];

    while (i >= 0 || j >= 0 || carry !== 0) {
        let n1 = i >= 0 ? num1.charAt(i) - '0' : 0;
        let n2 = j >= 0 ? num2.charAt(j) - '0' : 0;
        let result = n1 + n2 + carry;
        ans.push(result % 10);

        carry = Math.floor(result / 10);
        i--;
        j--;
    }
    return ans.reverse().join('');
}


/**
 * 1. 两数之和
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let res = target - nums[i];
        if (map.has(res)) {
            return [map.get(res), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
}


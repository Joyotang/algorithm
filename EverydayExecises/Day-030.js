/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let res = [];
    let n = nums.length;
    let setCase = new Set();

    function backtrack(start, paths) {
        if (paths.length >= 2) {
            let str = paths.join(',');  // 转成字符串，存入set
            if (!setCase.has(str)) {    // 避免重复的子序列进入res
                res.push([...paths]);   // 推入一份拷贝，path还要继续用
                setCase.add(str);
            }
        }
        
        for (let i = start; i < n; i++) {
            const prev = paths[paths.length - 1];
            const cur = nums[i];
            if (paths.length === 0 || prev <= cur) {
                paths.push(cur);            // 选择当前的数字
                backtrack(i + 1, paths);    // 继续往下递归
                paths.pop();                // 撤销选择当前数字，选择别的数字
            }
        }
    }

    backtrack(0, []);
    return res;
};
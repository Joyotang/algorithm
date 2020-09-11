/**
 * 40. 组合总和 II
 * https://leetcode-cn.com/problems/combination-sum-ii/
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);

    function backtrack(start, target, path) {
        if (target < 0) return;
        if (target === 0) {
            res.push([...path]);
        }

        for (let i = start; i < candidates.length; i++) {
            if (i- 1 >= start && candidates[i - 1] === candidates[i]) continue; // 与 39 题的区别，同一数字不能重复用，多增加一条剪枝
            if (target - candidates[i] < 0) break;

            path.push(candidates[i]);
            backtrack(i + 1, target - candidates[i], path);  // 需要 + 1
            path.pop();
        }
    }

    backtrack(0, target, [])
    return res;
};




/**
 * 216. 组合总和 III
 * https://leetcode-cn.com/problems/combination-sum-iii/
 * 
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = [];

    function backtrack(start, n, path) {
        if (n < 0) return;
        if (path.length === k && n === 0) {
            return res.push([...path]);
        }

        for (let i = start; i <= 9; i++) {
            path.push(i);
            backtrack(i + 1, n - i, path);
            path.pop();
        }
    }
    
    backtrack(1, n, []);
    return res;
};
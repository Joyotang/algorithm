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
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 三个方向记录
    let rows = {};
    let cols = {};
    let boxes = {};

    // 遍历数独
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            // 子数独序号
            let boxIndex = parseInt((i / 3)) * 3 + parseInt(j / 3);
            if (num != '.') {
                if (rows[`${i}-${num}`] || cols[`${j}-${num}`] || boxes[`${boxIndex}-${num}`]) return false;

                // 以各自方向 + 不能出现重复的数字 组成唯一键值，若出现第二次，即为重复
                rows[`${i}-${num}`] = true;
                cols[`${j}-${num}`] = true;
                boxes[`${boxIndex}-${num}`] = true;
            }
        }
    }
    return true;
};
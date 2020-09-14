/**
 * 36. 有效的数独
 * https://leetcode-cn.com/problems/valid-sudoku/
 * 
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

/* -----------------------------------The next day coding.------------------------------------- */
var isValidSudoku = function(board) {
    // 三个方向记录
    let rows = {};
    let cols = {};
    let boxes = {};

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let num = board[i][j];
            let boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3);
            if (num != '.') {
                if (rows[`${i}-${num}`] || cols[`${j}-${num}`] || boxes[`${boxIndex}-${num}`]) return false;

                rows[`${i}-${num}`] = true;
                cols[`${j}-${num}`] = true;
                boxes[`${boxIndex}-${num}`] = true;
            }
        }
    }
    return true;
};

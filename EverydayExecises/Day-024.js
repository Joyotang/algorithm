/**
 * 647. 回文子串
 * https://leetcode-cn.com/problems/palindromic-substrings/
 * 
 * 解法一：中心扩展法
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
    let count = 0;
    let n = s.length;

    for (let i = 0; i < 2 * n - 1; i++) {
        let start = Math.floor(i / 2);
        let end = Math.floor(i / 2) + i % 2;
        console.log('start:', start);
        console.log('end:', end);
        while (start >= 0 && end < n && s[start] === s[end]) {
            console.log('-------------------')
            start--;
            end++;
            count++;
        }
    }
    return count;
};


console.log(countSubstrings("bbca"))



/**
 * 200. 岛屿数量
 * https://leetcode-cn.com/problems/number-of-islands/
 * 
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    let n = grid.length;
    if (n === 0) return 0;
    let m = grid[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1') {
                DFSMarking(grid, i, j);
                // 碰到 1，岛屿数量 +1；
                count++;
            }
        }
    }

    function DFSMarking(grid, i, j) {
        if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== '1') return;

        // 将当前的 1 置为 0
        grid[i][j] = '0';
        DFSMarking(grid, i - 1, j);  // 上
        DFSMarking(grid, i + 1, j);  // 下
        DFSMarking(grid, i, j - 1);  // 左
        DFSMarking(grid, i, j + 1);  // 右
    }

    return count;
};


/* -----------------------------------The next day coding.------------------------------------- */
const countSubstrings = (s) => {
    let count = 0;
    let n = s.length;

    for (let i = 0; i < 2*n - 1; i++) {
        let start = Math.floor(i / 2);
        let end = Math.floor(i / 2) + i % 2;

        while (start >= 0 && end < n && s[start] === s[end]) {
            count++;
        }
    }
    return count;
};




var numIslands = function(grid) {
    let count = 0;
    let n = grid.length;
    if (n === 0) return 0;
    let m = grid[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1') {
                DFSMarking(grid, i, j);
                count++;
            }
        }
    }

    function DFSMarking(grid, i, j) {
        if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== '1') return;

        grid[i][j] = '0';
        DFSMarking(grid, i - 1, j);   // 上
        DFSMarking(grid, i + 1, j);   // 下
        DFSMarking(grid, i, j - 1);   // 左
        DFSMarking(grid, i, j + 1);   // 右
    }

    return count;
}




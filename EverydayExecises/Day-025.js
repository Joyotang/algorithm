/**
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
        DFSMarking(grid, i, j - 1);  // 上
        DFSMarking(grid, i, j + 1);  // 下
        DFSMarking(grid, i - 1, j);  // 左
        DFSMarking(grid, i + 1, j);  // 右
    }

    return count;
};
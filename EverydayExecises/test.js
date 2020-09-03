/* -----------------------------------The next day coding.------------------------------------- */
/**
 * 64. 最小路径和
 * https://leetcode-cn.com/problems/minimum-path-sum/
 * 时间复杂度和空间复杂度都是 O (m * n);
 * 
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
    if (grid === null || grid.length === 0 || grid[0].length === 0) return 0;
    let rows = grid.length;
    let cols = grid[0].length;
    let dp = Array.from(new Array(rows), () => new Array(cols));

    // 初始化起点值
    dp[0][0] = grid[0][0];

    // 填充rows
    for (let i = 1; i < rows; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }

    // 填充cols
    for (let j = 1; j < cols; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp[rows - 1][cols - 1];
}


console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))
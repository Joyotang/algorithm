/**
 * @param {number[]} nums
 * @return {boolean}
 */
var minPathSum = function (grid) {
    // 时间复杂度和空间复杂度都是 O (m * n);
    if (grid.length === 0) return 0;
    const dp = [];
    const rows = grid.length;
    const cols = grid[0].length;
    // 实际上你也可以无差别全部填充为MAX_VALUE，对结果没影响,代码还会更少
    // 只是有点不专业而已
    for (let i = 0; i < rows + 1; i++) {
        dp[i] = [];
        // 初始化第一列
        dp[i][0] = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < cols + 1; j++) {
            // 初始化第一行
            if (i === 0) {
                dp[i][j] = Number.MAX_SAFE_INTEGER;
            }
        }
    }
    debugger

    // tricky
    // dp[0][1] = 0;

    // for (let i = 1; i < rows + 1; i++) {
    //     for (let j = 1; j < cols + 1; j++) {
    //         // state transition
    //         dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
    //     }
    // }


    

    return dp[rows][cols];
};


function minPathSum(grid) {
    if (grid === null || grid.length === 0 || grid[0].length === 0) return 0;
    let rows= grid.length;
    let cols= grid[0].length;
    



    if (grid == null || grid.length == 0 || grid[0].length == 0) {
        return 0;
    }
    int rows = grid.length, columns = grid[0].length;
    int[][] dp = new int[rows][columns];
    dp[0][0] = grid[0][0];
    for (int i = 1; i < rows; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for (int j = 1; j < columns; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }
    for (int i = 1; i < rows; i++) {
        for (int j = 1; j < columns; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp[rows - 1][columns - 1];
}

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))
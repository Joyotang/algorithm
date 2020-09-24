var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = Array.from(new Array(m), () => new Array(n));
    dp[m - 1][n - 1] = Number(!obstacleGrid[m - 1][n - 1]);

    // 最右边一列
    for (let i = m - 2; i >= 0; i--) {
        dp[i][n - 1] = obstacleGrid[i][n - 1] === 1 || dp[i + 1][n - 1] === 0 ? 0 : 1;
    }

    // 最底下一行
    for (let j = n - 2; j >= 0; j--) {
        dp[m - 1][j] = obstacleGrid[m - 1][j] === 1 || dp[m - 1][j + 1] === 0 ? 0 : 1;
    }

    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return dp[0][0];
};

// let board = [
//     [0, 0, 0, 0],
//     [0, 1, 0, 1],
//     [0, 0, 0, 0],
// ]

let board = [
    [0, 1]
]
console.log(uniquePathsWithObstacles(board))

// const board = [
//     [0,0],
//     [1,1],
//     [0,0]
// ]


// console.log(uniquePathsWithObstacles(board));
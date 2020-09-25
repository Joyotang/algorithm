/**
 * 617. 合并二叉树
 * https://leetcode-cn.com/problems/merge-two-binary-trees/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (t1 == null) return t2;
    if (t2 == null) return t1;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    t1.val += t2.val;
    return t1;
};



/* -----------------------------------The next day coding.------------------------------------- */
var mergeTrees = function(t1, t2) {
    if (t1 === null) return t2;
    if (t2 === null) return t1;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    t1.val += t2.val;
    return t1;
};





/**
 * 63. 不同路径 II
 * https://leetcode-cn.com/problems/unique-paths-ii/
 * 解法一：动态规划（从 起点 往 终点 递推）
 * 
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] == 1) return 0; 

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = Array.from(new Array(m), () => new Array(n).fill(0));

    // 第一列
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
        dp[i][0] = 1;
    }

    // 第一行
    for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
        dp[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
};


/* -----------------------------------The next day coding.------------------------------------- */
// 解法一：动态规划（从 起点 往 终点 递推）
const uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    let dp = Array.from(new Array(m), () => new Array(n));
    dp[0][0] = 1;

    // 填充第一列
    for (let i = 1; i < m; i++) {
        dp[i][0] = obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0 ? 0 : 1;
    }

    // 填充第一行
    for (let j = 1; j < n; j++) {
        dp[0][j] = obstacleGrid[0][j] === 1 || dp[0][j - 1] === 0 ? 0 : 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            } else {
                // 有障碍物，置为 0
                dp[i][j] = 0;
            }
        }
    }

    return dp[m - 1][n - 1];
}


/**
 * 63. 不同路径 II
 * https://leetcode-cn.com/problems/unique-paths-ii/
 * 解法二：动态规划（从 终点 往 起点 递推）
 * 
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = Array.from(new Array(m), () => new Array(n));
    dp[m - 1][n - 1] = 1 ^ (obstacleGrid[m - 1][n - 1]);    // 1 ^ 1 === 0; 1 ^ 0 === 1 相当于 Number(!obstacleGrid[m - 1][n - 1])

    // 初始化最右边一列
    for (let i = m - 2; i >= 0; i--) {
        dp[i][n - 1] = obstacleGrid[i][n - 1] === 1 || dp[i + 1][n - 1] === 0 ? 0 : 1;
    }

    // 初始化最底下一行
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

// const board = [
//     [0,0],
//     [1,1],
//     [0,0]
// ]

let board = [
    [0, 1]
]
console.log(uniquePathsWithObstacles(board))
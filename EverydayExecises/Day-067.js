/**
 * 112. 路径总和
 * https://leetcode-cn.com/problems/path-sum/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    const dfs = (root, sum) => {
        if (!root) return false;
        sum -= root.val;

        if (!root.left && !root.right && sum === 0) return true;
        return dfs(root.left, sum) || dfs(root.right, sum);
    }
    return dfs(root, sum);
};


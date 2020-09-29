/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let result = [];
    
    function helper(node) {
        if (!node) return;
        helper(node.left);
        helper(node.right);
        result.push(node.val);
    }
    
    helper(root);

    return result;
};


/**
 * 方法二：迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let res = [];
    let stack = [];

    while (root != null || stack.length) {
        res.unshift(root.val);
        if (root.left) stack.push(root.left);
        if (root.right) stack.push(root.right);
        root = stack.pop();
    }

    return res;
};




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
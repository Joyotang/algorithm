/**
 * 113. 路径总和 II
 * https://leetcode-cn.com/problems/path-sum-ii/
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let res = [];
    
    const backtrack = (root, sum, path) => {
        if (root === null) return;

        path.push(root.val);
        sum -= root.val;

        if (!root.left && !root.right && sum == 0) {
            res.push([...path]);
        }

        backtrack(root.left, sum, path);
        backtrack(root.right, sum, path);

        path.pop();
    }

    backtrack(root, sum, []);
    return res;
};



var pathSum = function(root, sum) {
    let res = [];
    
    const backtrack = (root, sum, path) => {
        if (root === null) return;

        path.push(root.val);

        if (!root.left && !root.right && root.val == sum) {
            res.push([...path]);
        }

        backtrack(root.left, sum - root.val, path);
        backtrack(root.right, sum - root.val, path);

        path.pop();
    }

    backtrack(root, sum, []);
    return res;
};


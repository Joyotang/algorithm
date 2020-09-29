/**
 * 145. 二叉树的后序遍历
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * 
 * 时间复杂度分析：O(n)
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：递归 - 基于递归的遍历
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


// 方法二：迭代 - 基于栈的遍历
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


const binaryTree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 3,
        left: {
            val: 5,
            left: null,
            right: null
        },
        right: {
            val: 6,
            left: null,
            right: null
        }
    }
}


console.log(postorderTraversal(binaryTree))
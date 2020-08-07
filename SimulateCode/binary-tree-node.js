/**
 * 144. 二叉树的前序遍历
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * 
 * 94. 二叉树的中序遍历
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * 
 * 145. 二叉树的后序遍历
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * /


/**
 * 前序（递归）
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = [];
    
    function helper(node) {
        if (!node) return;
        result.push(node.val);
        helper(node.left);
        helper(node.right);
    }

    helper(root);
    return result;
};



// 中序（递归）
var inorderTraversal = function(root) {
    let result = [];

    function helper(node) {
        if (!node) return;
        helper(node.left);
        result.push(node.val);
        helper(node.right);
    }

    helper(root);
    return result;
};


// 后序（递归）
var inorderTraversal = function(root) {
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
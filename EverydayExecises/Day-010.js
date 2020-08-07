/**
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
    
    function preOrderTraversalNode(node) {
        if (!node) return;
        result.push(node.val);
        preOrderTraversalNode(node.left);
        preOrderTraversalNode(node.right);
    }
    preOrderTraversalNode(root);
    return result;
};


var preorderTraversal = function(root) {
    let result = [];
    let stack = [];

    if (root) stack.push(root);

    while (stack.length) {
        let curNode = stack.pop();
        result.push(curNode.val);

        if (curNode.right !== null) stack.push(curNode.right);
        if (curNode.left !== null) stack.push(curNode.left);
    }
    
    return result;
};

/* -----------------------------------The next day coding.------------------------------------- */
var preorderTraversal = function(root) {
    let res = [];
    let stack = [];

    if (root) stack.push(root);

    while (stack.length) {
        let curNode = stack.pop();
        res.push(curNode.val);

        if (curNode.right !== null) stack.push(curNode.right);
        if (curNode.left !== null) stack.push(curNode.left);
    }
    return res;
};





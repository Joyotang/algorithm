/**
 * 102. 二叉树的层序遍历
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    if (!root) return res;

    let queue = [root];

    while (queue.length) {
        let currentLevelSize = queue.length;
        res.push([]);

        for (let i = 1; i <= currentLevelSize; i++) {
            let node  = queue.shift();
            res[res.length - 1].push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return res;
};


/**
 * 107. 二叉树的层次遍历 II
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let res = [];
    if (!root) return res;

    let queue = [root];

    while (queue.length) {
        let currentLevelSize = queue.length;
        let curr = [];

        for (let i = 0; i < currentLevelSize; i++) {
            let node = queue.shift();
            curr.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.unshift(curr);
    }
    return res;
};

/* -----------------------------------The next day coding.------------------------------------- */
var levelOrder = function(root) {
    let res = [];
    if (!root) return res;

    let queue = [root];

    while (queue.length) {
        let currentLevelSize = queue.length;
        res.push([]);

        for (let i = 0; i < currentLevelSize; i++) {
            let node = queue.shift();
            res[res.length - 1].push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return res;
};


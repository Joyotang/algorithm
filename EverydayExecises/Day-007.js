/**
 * 114. 二叉树展开为链表
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    let current = root;
    while (current !== null) {
        if (current.left !== null) {
            let next = current.left;
            pre = next;
            while (pre.right !== null) {
                pre = pre.right;
            }
            pre.right = current.right;
            current.left = null;
            current.right = next;
        }
        current = current.right;
    }
};


/* -----------------------------------The next day coding.------------------------------------- */
var flatten = function (root) {
    let current = root;

    while (current !== null) {
        if (current.left !== null) {
            let next = current.left;
            let pre = next;
            while (pre.right !== null) {
                pre = pre.right;
            }
            pre.right = current.right;
            current.left = null;
            current.right = next;
        }
        current = current.right;
    }
};


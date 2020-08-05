/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 337. 打家劫舍 III
 * https://leetcode-cn.com/problems/house-robber-iii/
 * @param {TreeNode} root
 * @return {number}
 */
function rob(root) {
    let result = robInternal(root);
    return Math.max(result[0], result[1]);
}

function robInternal(root) {
    if (root === null) return [0, 0];
    let result = [];

    let left = robInternal(root.left);
    let right = robInternal(root.right);

    result[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    result[1] = left[0] + right[0] + root.val;

    return result;
}
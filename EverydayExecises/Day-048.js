/**
 * 637. 二叉树的层平均值
 * https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/
 * 
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
var averageOfLevels = function(root) {
    let res = [];
    let queue = [root];

    while (queue.length) {
        const levelSize = queue.length;
        let levelSum = 0;
        for (let i = 0; i < levelSize; i++) {
            let curNode = queue.shift();
            levelSum += curNode.val;
            if (curNode.left) queue.push(curNode.left);
            if (curNode.right) queue.push(curNode.right);
        }
        res.push(levelSum / levelSize);
    }
    return res;
};
/**
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
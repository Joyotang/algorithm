/**
 * 404. 左叶子之和
 * https://leetcode-cn.com/problems/sum-of-left-leaves/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * DFS
 * 时间复杂度：O(n)
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    let sum = 0;

    const dfs = (root, isLeft) => {
        if (root.left === null && root.right === null) {
            if (isLeft) sum += root.val;
            return;
        }
        if (root.left) dfs(root.left, true);
        if (root.right) dfs(root.right, false);
    }
    dfs(root, false);
    return sum;
};


/**
 * BFS
 * 时间复杂度：O(n)
 * @param {*} root 
 */
var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    let sum = 0;
    let queue = [root];

    while (queue.length) {
        let curNode = queue.shift();
        if (curNode.left) {
            if (curNode.left.left === null && curNode.left.right === null) {
                sum += curNode.left.val;
            }
            queue.push(curNode.left);
        }
        if (curNode.right) queue.push(curNode.right);
    }
    return sum;
};

/* -----------------------------------The next day coding.------------------------------------- */
var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    let sum = 0;
    let queue = [root];

    while (queue.length) {
        let currNode = queue.shift();
        if (currNode.left) {
            if (currNode.left.left === null && currNode.left.right === null) {
                sum += currNode.left.val;
            }
            queue.push(currNode.left);
        }
        if (currNode.right) queue.push(currNode.right);
    }
    return sum;
};
/**
 * 501. 二叉搜索树中的众数
 * https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/
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
var findMode = function (root) {
    var mode = [],
        curNodeVal = NaN,
        curNodeCount = 0,
        maxCount = -Infinity;

    var inorder = function (root) {
        if (!root) return;
        inorder(root.left);
        curNodeCount = (root.val === curNodeVal ? curNodeCount : 0) + 1;
        curNodeVal = root.val;
        if (curNodeCount > maxCount) {
            mode = [root.val];
            maxCount = curNodeCount;
        } else if (curNodeCount === maxCount) {
            mode.push(root.val);
        }
        inorder(root.right);
    }
    inorder(root);
    return mode;
}




// 未通过测试
var findMode = function(root) {
    let res = [];
    const dfs = (curNode) => {
        if (!root) return null;
        if (curNode.left && curNode.val == curNode.left.val) res.push(curNode.val); 
        if (curNode.right && curNode.val == curNode.right.val) res.push(curNode.val); 

        if (curNode.left) dfs(curNode.left);
        if (curNode.right) dfs(curNode.right);
    }
    dfs(root)
    return res;
};

let binaryTree = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: null
    }
}
console.log(findMode(binaryTree))

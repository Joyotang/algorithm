/**
 * 105. 从前序与中序遍历序列构造二叉树
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const map = {};

    for (let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i;
    }

    const helper = (pStart, pEnd, iStart, iEnd) => {
        if (pStart > pEnd || iStart > iEnd) return null;

        const rootVal = preorder[pStart];   // 确定根节点值
        const root = new TreeNode(rootVal); // 根节点

        const mid = map[rootVal];           // 根节点在inorder的位置
        const leftNodeNum = mid - iStart;   // 左子树的节点数

        root.left = helper(pStart + 1, pStart + leftNodeNum, iStart, mid - 1);
        root.right = helper(pStart + leftNodeNum + 1, pEnd, mid + 1, iEnd);

        return root;
    }

    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};



/**
 * 106. 从中序与后序遍历序列构造二叉树
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const map = {};

    for (let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i;
    }

    const helper = (iStart, iEnd, pStart, pEnd) => {
        if (iStart > iEnd || pStart > pEnd) return null;

        const rootVal = postorder[pEnd];    // 确定根节点的值
        const root = new TreeNode(rootVal); // 根节点

        const mid = map[rootVal];           // 根节点在inorder的位置
        const leftNodeNum = mid - iStart;   // 左子树的节点数

        root.left = helper(iStart, mid - 1, pStart, pStart + leftNodeNum - 1);
        root.right = helper(mid + 1, iEnd, pStart + leftNodeNum, pEnd - 1);
        return root;
    }

    return helper(0, inorder.length - 1, 0, postorder.length - 1);
};


/* -----------------------------------The next day coding.------------------------------------- */
var buildTree = function(inorder, postorder) {
    let map = {};

    for (let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i;
    }

    const helper = (iStart, iEnd, pStart, pEnd) => {
        if (iStart > iEnd || pStart > pEnd) return null;

        const rootVal = postorder[pEnd];
        const root = new TreeNode(rootVal);

        let mid = map[rootVal];
        let leftNodeNum = mid - iStart;

        root.left = helper(iStart, mid - 1, pStart, pStart + leftNodeNum - 1);
        root.right = helper(mid + 1, iEnd, pStart + leftNodeNum, pEnd - 1);
        return root;
    }

    return helper(0, inorder.length - 1, 0, postorder.length - 1);
};
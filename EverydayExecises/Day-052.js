/**
 * 226. 翻转二叉树
 * https://leetcode-cn.com/problems/invert-binary-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法一：递归
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root == null) return root;

    let left = invertTree(root.left);
    let right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
};

/**
 * 方法二：迭代
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;
    let queue = [root];

    while (queue.length) {
        const curNode = queue.shift();
        let temp = curNode.left;
        curNode.left = curNode.right;
        curNode.right = temp;

        if (curNode.left) queue.push(curNode.left);
        if (curNode.right) queue.push(curNode.right);
    }
    return root;
};

const binaryTree = {
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 7,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 9,
            left: null,
            right: null
        }
    }
}

console.log(invertTree(binaryTree))



/**
 * 191. 位1的个数
 * https://leetcode-cn.com/problems/number-of-1-bits/
 * 方法一：转字符串迭代法
 * 
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    n = n.toString(2);
    for (let i = 0; i <= n.length; i++) {
        if (n[i] === '1') {
            count++;
        }
    }
    return count;
};


/**
 * 191. 位1的个数
 * https://leetcode-cn.com/problems/number-of-1-bits/
 * 方法二：位运算法
 * 
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n != 0) {
        count++;
        n = n & (n - 1);    // 清零最低位的1（每次去掉最低位的1 直到所有的1都去除）
    }
    return count;
};
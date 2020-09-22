/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let num = 0;
    const dfs = (root) => {
        if (!root) return null;
        dfs(root.right);
        root.val = root.val + num;
        num = root.val;
        dfs(root.left);
    }
    dfs(root)
    return root;
};

let binaryTree = {
    val: 5,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 13,
        left: null,
        right: null
    }
}

console.log(convertBST(binaryTree))


/**
 * 387. 字符串中的第一个唯一字符
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * 
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let n = s.length;
    let hash = {};
    for (let i = 0; i < n; i++) {
        if (!hash[s[i]]) {
            hash[s[i]] = 1;
        } else {
            hash[s[i]]++;
        }
    }
    for (let i = 0; i < n; i++) {
        if (hash[s[i]] == 1) return i;
    }
    return -1;
};

var firstUniqChar = function(s) {
    let n = s.length;
    let hash = {};
    let result = new Map();
    for (let i = 0; i < n; i++) {
        if (!hash[s[i]]) {
            hash[s[i]] = 1;
            result.set(s[i], i);
        } else {
            result.delete(s[i]);
        }
    }
    if (result.size === 0) return -1;
    return result.values().next().value;
};

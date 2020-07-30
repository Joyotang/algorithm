/**
 * 66.加一
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length;
    for (let i = n - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] = digits[i] % 10;
        if (digits[i] !== 0) {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};



/**
 * 104.二叉树的最大深度
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};


/* -----------------------------------Day2 Code------------------------------------- */
function plusOne(digits) {
    let length = digits.length;

    for (let i = length - 1; i > length; i--) {
        digits[i]++;
        digits[i] = digits[i] % 10;
        if (digits[i] !== 0) {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
}


function maxDepth(root) {
    if (!root) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
}
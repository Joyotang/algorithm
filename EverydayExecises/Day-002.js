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


/* -----------------------------------The next day coding.------------------------------------- */
function plusOne(digits) {
    let length = digits.length;

    for (let i = length - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] = digits[i] % 10;
        if (digits[i] !== 0) {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
}


function plusOne(digits) {
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
}

function plusOne(digits) {
    let len = digits.length;

    for (let i = len - 1; i >= 0; i--) {
        console.log('------digits[i]:', digits[i]);
        digits[i]++;
        console.log('------digits[i]:', digits[i]);

        digits[i] = digits[i] % 10;
        console.log('------digits[i]:', digits[i]);
        if (digits[i] !== 0) {
            console.log('-------digits[i] !== 0------');
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
}

// console.log(plusOne([9, 9, 9]));
// console.log(plusOne([1, 0]));
console.log(plusOne([1, 5]));







/**
 * 104.二叉树的最大深度
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * 
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



/**
 * 111. 二叉树的最小深度
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 * 
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
var minDepth = function(root) {
    if (!root) return 0;
    if (root.left == null && root.right == null) return 1;

    let ans = Number.MAX_SAFE_INTEGER;
    if (root.left !== null) {
        ans = Math.min(minDepth(root.left), ans)
    }

    if (root.right !== null) {
        ans = Math.min(minDepth(root.right), ans)
    }
    return ans + 1;
};


/* -----------------------------------The next day coding.------------------------------------- */
// 104.二叉树的最大深度
function maxDepth(root) {
    if (!root) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
}


// TODO: 111. 二叉树的最小深度
var minDepth = function(root) {
    
};
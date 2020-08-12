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


function maxDepth(root) {
    if (!root) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
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


function maxDepth(root) {
    if (!root) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
}
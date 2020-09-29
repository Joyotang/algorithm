/**
 * 117. 填充每个节点的下一个右侧节点指针 II
 * https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/
 * 
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 方法一：层序遍历
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;
    let queue = [root];

    while (queue.length) {
        let levelSize = queue.length;
        let pre = null;
        for (let i = 0; i < levelSize; i++) {
            let curNode = queue.shift();
            if (pre !== null) pre.next = curNode;
            pre = curNode;

            curNode.left && queue.push(curNode.left);
            curNode.right && queue.push(curNode.right);
        }
    }
    return root;
};

/**
 * 方法二：哨兵法
 * @param {Node} root
 * @return {Node}
 */
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

var connect = function(root) {
    if (!root) return null;
    let curNode = root;

    while (curNode != null) {
        let dummy = new Node(0);
        let pre = dummy;

        while (curNode != null) {
            if (curNode.left) {
                pre.next = curNode.left;
                pre = pre.next;
            }
            if (curNode.right) {
                pre.next = curNode.right;
                pre = pre.next;
            }
            curNode = curNode.next;
        }
        curNode = dummy.next;
    }
    return root;
};
  


const binaryTree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

console.log(connect(binaryTree));


/* -----------------------------------The next day coding.------------------------------------- */
var connect = function(root) {
    if (!root) return null;
    let curNode = root;

    while (curNode != null) {
        let dummy = new Node(0);
        let pre = dummy;

        while (curNode != null) {
            if (curNode.left) {
                pre.next = curNode.left;
                pre = pre.next;
            }
            if (curNode.right) {
                pre.next = curNode.right;
                pre = pre.next;
            }
            curNode = curNode.next;
        }
        curNode = dummy.next;
    }
    return root;
};

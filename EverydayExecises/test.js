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
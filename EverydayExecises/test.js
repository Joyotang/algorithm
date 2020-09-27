// var lowestCommonAncestor = function(root, p, q) {
//     if (!root || root === p || root === q) return root;
//     const left = lowestCommonAncestor(root.left, p, q);
//     const right = lowestCommonAncestor(root.right, p, q);
//     if (!left) return right;
//     if (!right) return left;
//     return root;
// };

const lowestCommonAncestor = (root, p, q) => {
    if (p < root.val && q < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if (p > root.val && q > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
};
  


const binaryTree = {
    val: 6,
    left: {
        val: 2,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: {
                val: 5,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 8,
        left: {
            val: 7,
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

console.log(lowestCommonAncestor(binaryTree, 2, 8));
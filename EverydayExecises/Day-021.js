/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (!left) return right;
    if (!right) return left;
    return root;
};


var lowestCommonAncestor = function(root, p, q) {
    let parent = new Map();
    let visited = new Set();

    function dfs(root) {
        if (root.left !== null) {
            parent.set(root.left.val, root);
            dfs(root);
        }
        if (root.right !== null) {
            parent.set(root.right.val, root);
            dfs(root);
        }
    }

    dfs(root);

    while (p !== null) {
        visited.add(p.val);
        p = parent.get(p.val);
    }

    while (q !== null) {
        if (visited.has(q.val)) {
            return q;
        }
        q = parent.get(q.val);
    }
    return null;
};
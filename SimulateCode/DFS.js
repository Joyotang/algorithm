/**
 * DFS - 递归实现
 * @param {*} node 
 */
function search(root) {
    let visited = new Set();

    function dfs(root) {
        if (visited.has(root)) return;
        
        visited.add(root);
        dfs(root.left);
        dfs(root.right);
    }

    dfs(node);
    return visited;
}


/**
 * DFS - 非递归实现（借助栈）
 * @param {*} node 
 */
function dfs(root) {
    if (!root) return;
    let visited = new Set();
    let stack = [root];

    while (stack.length) {
        let currNode = stack.pop();
        if (visited.has(currNode)) continue;

        visited.add(currNode);
        if (currNode.right) stack.push(currNode.right);
        if (currNode.left) stack.push(currNode.left);
    }
    return visited;
}
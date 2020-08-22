/**
 * BFS - JS实现（借助队列）
 * @param {*} node 
 */
function bfs(root) {
    let result = [];
    let queue = [root];

    while (queue.length) {
        let level = [];
        let n = queue.length;

        for (let i = 0; i < n; i++) {
            const currrNode = queue.pop();
            level.push(currrNode.val);

            if (currrNode.left) queue.unshift(currrNode.left);
            if (currrNode.right) queue.unshift(currrNode.right);
        }
        result.push(level);
    }
    return result;
}
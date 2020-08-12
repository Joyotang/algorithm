/**
 * 133. 克隆图
 * https://leetcode-cn.com/problems/clone-graph/
 * 
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    let map = new Map();
    let stack = [node];

    let newNode = new Node(node.val, []);
    map.set(node.val, newNode);

    while (stack.length) {
        let _node = stack.pop();
        let _newNode = map.get(_node.val);

        _node.neighbors.forEach(neighbor => {
            let _newNB = map.get(neighbor.val);
            if (!_newNB) {
                stack.push(neighbor);
                _newNB = new Node(neighbor.val, []);
                map.set(neighbor.val, _newNB);
            }
            _newNode.neighbors.push(_newNB);
        })
    }
    return newNode;
};
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];

    function combineSub(start, subresult) {
        if (subresult.length === k) {
            res.push(subresult.slice(0));
            return;
        }

        for (let i = start; i <= n; i++) {
            subresult.push(i);
            combineSub(i + 1, subresult);
            subresult.pop();
        }
    }
    
    combineSub(1, []);
    return res;
};


console.log(combine(4, 2))


/**
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
    if(!node) return null;
    let map = new Map();
    let stack = [node];

    let newNode = new Node(node.val, []);
    map.set(node.val, newNode);

    while(stack.length) {
        let _node = stack.pop();
        let _newNode = map.get(_node.val);
        
        _node.neighbors.forEach(neighbor => {
            let _newNB = map.get(neighbor.val);
            if(!_newNB){
                stack.push(neighbor);
                _newNB = new Node(neighbor.val, []);
                map.set(neighbor.val, _newNB);
            }
            _newNode.neighbors.push(_newNB);
        })
    }
    return newNode;
};

var cloneGraph = function (node) {
    if (!node) return null;

    let map = new Map();
    let stack = [node];
    console.log('stack:', stack);

    let newNode = new Node(node.val, []);
    map.set(node.val, newNode);
    console.log('newNode:', newNode);
    console.log('map:', map);

    while (stack.length) {
        let _node = stack.pop();
        let _newNode = map.get(_node.val);

        console.log('stack:', stack);

        console.log('_node:', _node);
        console.log('_newNode:', _newNode);

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
}
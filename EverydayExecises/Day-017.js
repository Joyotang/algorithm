/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];

    function helper(n, k) {
        if (n < 1) return;

        for (let i = 1; i < k; i++) {
            res.push([n, n - i])
        }
        helper(n, k);
    }
    
    helper(n, k);
    return res;
};


console.log(combine(4, 2))
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    arr.sort((a, b) => a - b);
    let res = []

    for (let i = 0; i < k; i++) {
        res.push(arr[i]);
    }
    return res;
};



var getLeastNumbers = function(arr, k) {
    let res = [];
    if (k == 0) return res;
    let queue = [];

    for (let i = 0; i < k; i++) {
        queue.push(arr[i]);
    }

    for (let i = k; i < arr.length; ++i) {
        if (queue[0] > arr[i]) {
            arr.shift();
            arr.push(arr[i]);
        }
    }
    for (let i = 0; i < k; i++) {
        res[i] = queue[0];
        queue.shift();
    }
    return res;
};
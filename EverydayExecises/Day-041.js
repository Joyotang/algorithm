/**
 * 60. 第k个排列
 * https://leetcode-cn.com/problems/permutation-sequence/
 * 回溯：基本版（自己一开始最笨的思路）
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let res = [];
    let used = {};
    let nums = [];
    for (let i = n; i > 0; i--) {
        nums[i - 1] = i;
    }

    function backtrack(index, path) {
        if (path.length === n) {
            let numStrs = path.join('');
            res.push(numStrs);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (used[i]) continue;
            
            used[i] = true;
            path.push(nums[i]);
            backtrack(index + 1, path);

            path.pop();
            used[i] = false;
        }
    }

    backtrack(0, []);
    return res[k - 1];
};


/**
 * 60. 第k个排列
 * https://leetcode-cn.com/problems/permutation-sequence/
 * 回溯 + 剪枝：基本版（时间复杂度：O(n!)）
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let count = 0;
    let used = {};

    function backtrack(path) {
        if (path.length === n) {
            count++;
            if (count === k) {
               return path.join('');
            }
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (used[i]) continue;
            
            used[i] = true;
            path.push(i);
            let res = backtrack(path);

            path.pop();
            used[i] = false;

            if (res) return res;
        }
    }
    return backtrack([]);
};



/* -----------------------------------The next day coding.------------------------------------- */
/**
 * https://leetcode-cn.com/problems/permutation-sequence/solution/shou-hua-tu-jie-jing-dian-de-dfshui-su-shu-xue-gui/
 * 
 * 60. 第k个排列
 * https://leetcode-cn.com/problems/permutation-sequence/
 * 回溯 + 剪枝：优化版（时间复杂度：O(n^2)）
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let used = new Set();
    let groupNums = 1;
    for (let i = 1; i <= n; i++) {
        groupNums = groupNums * i;
    }
    
    function backtrack(path) {
        let progress = path.length;
        if (progress === n) {
            return path.join('');
        }

        groupNums = groupNums / (n - progress);
        
        for (let i = 1; i <= n; i++) {
            if (used.has(i)) continue;
            if (k > groupNums) {
                k = k - groupNums;
                continue;
            }
            path.push(i);
            used.add(i);

            return backtrack(path);
        }
    }
    return backtrack([]);
};


/**
 * TODO
 * https://leetcode-cn.com/problems/permutation-sequence/solution/shou-hua-tu-jie-jing-dian-de-dfshui-su-shu-xue-gui/
 * 
 * 60. 第k个排列
 * https://leetcode-cn.com/problems/permutation-sequence/
 * 数学法（阶乘） + 找规律缩小问题规模（时间复杂度：O(n^2)）
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    
};


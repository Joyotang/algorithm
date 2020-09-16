/**
 * 39. 组合总和
 * https://leetcode-cn.com/problems/combination-sum/
 * 解法一：回溯
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    let sum = 0;

    function backtrack(start, path) {
        if (target === 0) {
            return res.push(path);
        }
        if (sum >= target) {
            if (sum === target) {
                res.push([...path]);
                used.add(pathStr);
            }
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            sum += candidates[i];
            backtrack(i, path);
            sum -= candidates[i];   
            path.pop();
        }
        
    }
    backtrack(0, []);
    return res;
};


/**
 * 39. 组合总和
 * https://leetcode-cn.com/problems/combination-sum/
 * 解法二：回溯 + 剪枝
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);

    function backtrack(start, target, path) {
        if (target < 0) return;
        if (target === 0) {
            return res.push([...path]);
        }

        for (let i = start; i < candidates.length; i++) {
            if (target - candidates[i] < 0) break;
            
            path.push(candidates[i]);
            backtrack(i, target - candidates[i], path);
            path.pop();
        }
    }

    backtrack(0, target, []);
    return res;
};


/**
 * 35. 搜索插入位置
 * https://leetcode-cn.com/problems/search-insert-position/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let n = nums.length;
    if (!n) return 0;
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;

        if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};

/* -----------------------------------The next day coding.------------------------------------- */
var combinationSum = function(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);

    function backtrack(start, target, path) {
        if (target < 0) return;
        if (target === 0) {
            return res.push([...path]);
        }

        for (let i = start; i < candidates.length; i++) {
            if (target - candidates[i] < 0) break;

            path.push(candidates[i]);
            backtrack(i, target - candidates[i], path);
            path.pop();
        }
    }

    backtrack(0, target, []);
    return res;
};

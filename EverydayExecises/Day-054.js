/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    let n = nums.length;
    if (!n) return res;
    nums.sort((a, b) => a -b);
    let hash = {};

    const backtrack = (path) => {
        if (path.length === n) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (hash[i] || i > 0 && hash[i - 1] === hash[i] && hash[i - 1] === false) continue;

            hash[nums[i]] = true;
            path.push(nums[i]);
            backtrack(path);

            path.pop();
            hash[nums[i]] = false;
        }
    }

    backtrack([])
    return res;
};
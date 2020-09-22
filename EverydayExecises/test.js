/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [];

    const backtrack = (start, path) => {
        res.push([...path]);
        console.log('-------start:', start)
        console.log('-------path:', path);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }

    backtrack(0, []);
    return res;
};


console.log(subsets([1, 2, 3]));
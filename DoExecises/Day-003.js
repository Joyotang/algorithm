/**
 * 15. 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);  // 排序
    let res = [];
    let n = nums.length;
    
    for (let k = 0; k < n - 2; k++) {
        if (nums[k] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if (k > 0 && nums[k] === nums[k - 1]) continue; // 去重

        let i = k + 1;
        let j = nums.length - 1;

        while(i < j) {
            let sum = nums[k] + nums[i] + nums[j];
            if (sum < 0) {
                i++;
            } else if (sum > 0) {
                j--;
            } else {
                res.push([nums[k], nums[i], nums[j]]);
                while (i < j && nums[i] == nums[i+1]) i++;  // 去重
                while (i < j && nums[j] == nums[j-1]) j--;  // 去重

                i++;
                j--;
            }
        }
    }
    return res;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums))




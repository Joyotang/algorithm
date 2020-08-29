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



/* -----------------------------------The next day coding.------------------------------------- */
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    let length = nums.length;

    for (let k = 0; k < length - 2; k++) {
        if (nums[k] > 0) break;
        if (k > 0 && nums[k] === nums[k - 1]) continue; // 去重

        let start = k + 1;
        let end = length - 1;

        while (start < end) {
            let sum = nums[k] + nums[start] + nums[end];
            if (sum < 0) {
                start++;
            } else if (sum > 0) {
                end--;
            } else {
                res.push([nums[k], nums[start], nums[end]]);

                while (start < end && nums[start] === nums[start+1]) start++;
                while (start < end && nums[end] === nums[end-1]) end--;
                start++;
                end--;
            }
        }
    }
    return res;
}



var threeSum = function(nums) {
    let res = [];
    let n = nums.length;
    // 排序
    nums.sort((a, b) => a - b);
    
    for (let a = 0; a < n - 2; a++) {
        if (nums[a] > 0) break;
        if (a > 0 && nums[a] === nums[a - 1]) continue; // 去重

        let b = a + 1;
        let c = n - 1;

        while (b < c) {
            let sum = nums[a] + nums[b] + nums[c];
            if (sum < 0) {
                b++;
            } else if (sum > 0) {
                c--;
            } else {
                res.push([nums[a], nums[b], nums[c]]);
                while (b < c && nums[b] === nums[b+1]) b++;
                while (b < c && nums[c] === nums[c-1]) c--;

                b++;
                c--;
            }
        }
    }
    return res;
}

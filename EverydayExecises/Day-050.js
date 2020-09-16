/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }

    for (const key in hash) {
        if (hash[key] === 1) {
            return key;
        }
    }
    return -1;
};

/* -----------------------------------The next day coding.------------------------------------- */
var singleNumber = function(nums) {
    let hash = [];

    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }

    for (const key in hash) {
        if (hash[key] === 1) {
            return key;
        }
    }
    return -1;
};

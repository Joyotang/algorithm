/**
 * 214. 最短回文串
 * https://leetcode-cn.com/problems/shortest-palindrome/
 * 
 * 解法一：暴力法 - 时间复杂度分析：O(n)
 * https://leetcode-cn.com/problems/shortest-palindrome/solution/zai-zi-fu-chuan-qian-mian-ai-ge-tian-jia-yuan-zi-f/
 * 
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let n = s.length;
    if (!n) return s;
    let revStrs = s.split('').reverse().join('');

    for (let i = 0; i < n; i++) {
        if (s.slice(0, n - i) === revStrs.slice(i)) {
            return revStrs.slice(0, i) + s;
        }
    }
};



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = [];
    let n = nums.length;
    if (!n || n < 4) return res;

    nums.sort((a, b) => a - b);

    var a, b, c, d;
    for (a = 0; a < n - 3; a++) {
        if (a > 0 && nums[a] === nums[a - 1]) continue; // 去重

        for (b = a + 1; b < n - 2; b++) {
            if (b > a + 1 && nums[b] === nums[b - 1]) continue; // 去重

            c = b + 1;
            d = n - 1;
    
            while (c < d) {
                let sum = nums[a] + nums[b] + nums[c] + nums[d];
                if (sum < target) {
                    c++;
                } else if (sum > target) {
                    d--;
                } else {
                    res.push([nums[a], nums[b], nums[c], nums[d]]);
                    while (c < d && nums[c] === nums[c+1]) c++; // 去重
                    while (c < d && nums[d] === nums[d-1]) d--; // 去重
    
                    c++;
                    d--;
                }
            }
        }
    }
    return res;
};
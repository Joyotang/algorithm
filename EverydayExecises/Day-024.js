/**
 * 647. 回文子串
 * https://leetcode-cn.com/problems/palindromic-substrings/
 * 
 * 解法一：中心扩展法
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
    let count = 0;
    let n = s.length;

    for (let i = 0; i < 2 * n - 1; i++) {
        let start = Math.floor(i / 2);
        let end = Math.floor(i / 2) + i % 2;
        console.log('start:', start);
        console.log('end:', end);
        while (start >= 0 && end < n && s[start] === s[end]) {
            console.log('-------------------')
            start--;
            end++;
            count++;
        }
    }
    return count;
};


console.log(countSubstrings("bbca"))
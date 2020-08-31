/**
 * 45. 跳跃游戏 II
 * https://leetcode-cn.com/problems/jump-game-ii/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n = nums.length - 1;
    let steps = 0;
    let now = 0;
    let endPos = 0;
    let maxPosition = 0;

    while (endPos < n) {
        maxPosition = Math.max(maxPosition, now + nums[now]);
        if (now === endPos) {
            steps++;
            endPos = maxPosition;
        }
        now++;
    }
    return steps;
};




/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let n = s.length;
    if (!n) return s;
    let strs = s.split(' ');

    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        strs[i] = word.split('').reverse().join('');
    }
    return strs.join(' ');
};


var reverseWords = function(s) {
    let n = s.length;
    if (!n) return s;
    let result = '';
    let word = '';

    for (let i = s.length - 1; i > 0; i--) {
        let char = s[i];
        if (char === ' ' && word.length) {
            result = word + ' ' + result;
            word = '';
        } else {
            word += s[i];
        }
    }
    return (word.length ? word + ' ' + result : result).trim();
};


/* -----------------------------------The next day coding.------------------------------------- */
var reverseWords = function(s) {
    let n = s.length;
    if (!n) return s;
    let result = '';
    let word = '';

    for (let i = n - 1; i > 0; i--) {
        let char = s[i];
        if (char === ' ' && word.length) {
            result = word + ' ' + result;
            word = '';
        } else {
            word += s[i];
        }
    }
    return (word.length ? word + ' ' + result : result).trim();
};



var jump = function(nums) {
    let n = nums.length - 1;
    let steps = 0;
    let now = 0;
    let endPos = 0;
    let maxPosition = 0;

    while (endPos < n) {
        maxPosition = Math.max(maxPosition, now + nums[now]);
        if (now === endPos) {
            steps++;
            endPos = maxPosition;
        }
        now++;
    }
    return steps;
};
/**
 * 459. 重复的子字符串
 * https://leetcode-cn.com/problems/repeated-substring-pattern/
 * 
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let n = s.length;

    for (let i = 1; i * 2 <= n; i++) {
        // 如果子集不是父集的倍数，那肯定不是重复的子字符串
        if (n % i === 0) {
            let match = true;
            for (let j = i; j < n; j++) {
                if (s[j] != s[j - i]) {
                    match = false;
                    break;
                }
            }
            if (match) return true;
        }
    }
    return false;
};

/* -----------------------------------The next day coding.------------------------------------- */
var repeatedSubstringPattern = function(s) {
    let n = s.length;

    for (let i = 1; i * 2 <= n; i++) {
        if (n % i === 0) {
            let match = true;
            for (let j = i; j < n; j++) {
                if (s[j] != s[j - i]) {
                    match = false;
                    break;
                }
            }
            if (match) return true;
        }
    }
    return false;
};


var repeatedSubstringPattern = function(s) {
    return (s + s).indexOf(s, 1) != s.length;
};
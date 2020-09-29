/**
 * 151. 翻转字符串里的单词
 * https://leetcode-cn.com/problems/reverse-words-in-a-string/
 * 
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};



/**
 * 917. 仅仅反转字母
 * https://leetcode-cn.com/problems/reverse-only-letters/
 * 
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let stackLettes = [];
    for (let i = 0; i < s.length; i++) {
        if (isLetter(s[i])) {
            stackLettes.push(s[i]);
        }
    }

    let strArr = [];
    for (let i = 0; i < s.length; i++) {
        if (isLetter(s[i])) {
            strArr.push(stackLettes.pop());
        } else {
            strArr.push(s[i]);
        }
    }
    return strArr.join('');
};

function isLetter(s) {
    if (/[a-zA-Z]/.test(s)) return true;
    return false;
}


/* -----------------------------------The next day coding.------------------------------------- */
var reverseOnlyLetters = function(s) {
    let stackLettes = [];
    for (let i = 0; i < s.length; i++) {
        if (isLetter(s[i])) {
            stackLettes.push(s[i]);
        }
    }

    let strArr = [];
    for (let i = 0; i < s.length; i++) {
        if (isLetter(s[i])) {
            strArr.push(stackLettes.pop());
        } else {
            strArr.push(s[i]);
        }
    }
    return strArr.join('');
};
/**
 * 22. 括号生成
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    generate(0, 2 * n, '');

    function generate(level, max, s) {
        if (level >= max) {
            console.log(s)
            return;
        }
        generate(level + 1, 2 * n, s + '(');
        generate(level + 1, 2 * n, s + ')');
    }
};


var generateParenthesis = function(n) {
    let res = [];
    generate(0, 0, n, '');

    function generate(left, right, n, s) {
        if (left === n && right === n) {
            res.push(s);
            return;
        }
        if (left < n) generate(left + 1, right, n, s + '(');
        if (right < left) generate(left, right + 1, n, s + ')');
    }
    return res;
};

// console.log(generateParenthesis(3));



/**
 * 暴力法
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 1) return x;
    let target = x;
    if (n < 0) {
        // 2^-1 = 1/2
        target = 1/x;
    }
    let len = Math.abs(n);
    let sum = 1;
    for (i = 0; i < len; i++) {
        sum *= target;
    }
    return sum;
};


/**
 * 递归
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n < 0) return 1 / myPow(x, -n);
    
    return n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x, n - 1);
};


function reverseStr(s) {
    let arrStr = s.split('.');
    let len = arrStr.length;
    console.log('arrStr:', arrStr)
    console.log('len:', len)
    let j = len - 1;
    for (let i = 0; i < len; i++) {
        if (i < j) {
            let temp = arrStr[i];
            console.log('temp:', temp)
            console.log('arrStr[j]:', arrStr[j])
            arrStr[i] = arrStr[j];
            arrStr[j] = temp;
            j--;
        }
    }
    return arrStr.join('.');
}

console.log(reverseStr('www.toutiao.com.cn'))


/**
 * 344. 反转字符串
 * https://leetcode-cn.com/problems/reverse-string/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(arrStr) {
    let len = arrStr.length;
    let j = len - 1;
    for (let i = 0; i < len; i++) {
        if (i < j) {
            let temp = arrStr[i];
            arrStr[i] = arrStr[j];
            arrStr[j] = temp;
            j--;
        }
    }
    return arrStr;
};

var reverseString = function(arrStr) {
    let len = arrStr.length;
    let i = 0;
    let j = len - 1;
    while (i < j) {
        let temp = arrStr[i];
        arrStr[i] = arrStr[j];
        arrStr[j] = temp;
        i++;
        j--;
    }
    return arrStr;
};
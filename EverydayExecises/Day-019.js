/**
 * 20. 有效的括号
 * https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        const item = s[i];
        // 左括号
        if (item === '(' || item === '[' || item === '{') {
            stack.push(item);
        } else {
            var left = null;
            switch (item) {
                case ')':
                    left = '(';
                    break;
                case ']':
                    left = '[';
                    break;
                case '}':
                    left = '{';
                    break;
            }
            if (left !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length ? false : true;
};



var isValid = function(s) {
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        const el = s[i];
        if (map[el]) {
            stack.push(map[el]);
        } else if (el !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid('(())'));


/* -----------------------------------The next day coding.------------------------------------- */
var isValid = function(s) {
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let elem = s[i];
        if (map[elem]) {
            stack.push(map[elem]);
        } else if (elem !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
};



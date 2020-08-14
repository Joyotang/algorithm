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

console.log(isValid('(({}))'));
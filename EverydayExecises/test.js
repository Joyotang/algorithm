var shortestPalindrome = function(s) {
    let n = s.length;
    if (!n) return s;
    let revStrs = s.split('').reverse().join('');

    for (let i = 0; i < n; i++) {
        debugger
        if (s.slice(0, n - i) === revStrs.slice(i)) {
            debugger
            return revStrs.slice(0, i) + s;
        }
    }
};


// console.log(shortestPalindrome('aacecaaa'))
console.log(shortestPalindrome('1243'))
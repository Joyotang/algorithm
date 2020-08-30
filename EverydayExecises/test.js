var reverseWords = function(s) {
    let n = s.length;
    if (!n) return s;
    let result = '';
    let word = '';

    for (let i = n - 1; i >= 0; i--) {
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


console.log(reverseWords("Let's take LeetCode contest"))
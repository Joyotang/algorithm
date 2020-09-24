/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(str) {
    let l = 0;
    let r = str.length - 1;

    while (l < r) {
        if (str[l] != str[r]) {
            return isPalin(str, l + 1, r) || isPalin(str, l, r - 1);
        }
        l++;
        r--;
    }
    return true;
};


function isPalin (str, l, r) {
    while (l < r) {
        if (str[l] != str[r]) return false;
        l++;
        r--;
    }
    return true;
}
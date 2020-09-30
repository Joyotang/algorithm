/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    if (n < 2) return s;

    let begin = 0;
    let maxLen = 1;

    let dp = Array.from(new Array(n), () => new Array(n));
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    for (let j = 1; j < n; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] != s[j]) {
                dp[i][j] = false;
            } else {
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }

            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    return s.substring(begin, begin + maxLen);
};
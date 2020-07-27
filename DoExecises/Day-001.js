/**
 * 392. 判断子序列
 * @param {*} s 
 * @param {*} t 
 */
var isSubsequence = function(s, t) {
    let sStack = s.split('');
    let tArray = t.split('');

    for (let i = 0; i < tArray.length; i++) {
        if (tArray[i] === sStack[0]) {
            sStack.shift();
        }

        if (sStack.length === 0) {
            return true;
        }
    }
    if (sStack.length === 0) {
        return true;
    }
    return false;
};
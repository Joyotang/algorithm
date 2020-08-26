/**
 * 17. 电话号码的字母组合
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * 
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let combinations = [];
    if (!digits.length) return combinations;
    
    let phoneMap = {
        2: 'abc',  3: 'def',
        4: 'ghi',  5: 'jkl', 6: 'mno',
        7: 'pqrs', 8: 'tuv', 9: 'wxyz'
    }

    function backtrack(index, tempList) {
        if (index === digits.length) {
            combinations.push(tempList.join(''));
        } else {
            let digit = digits.charAt(index);
            let letters = phoneMap[digit];
            for (let i = 0; i < letters.length; i++) {
                tempList.push(letters.charAt(i));
                backtrack(index + 1, tempList);
                tempList.pop();
            }
        }
    }

    backtrack(0, []);
    return combinations;
};


var letterCombinations = function(digits) {
    let combinations = [];
    if (!digits.length) return combinations;

    let phoneMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    function backtrack(index, tempList) {
        console.log('index:', index);
        if (index === digits.length) {
            console.log('------------end------------');
            combinations.push(tempList.join(''));
        } else {
            let digit = digits.charAt(index);
            let letters = phoneMap[digit];
            console.log('letters:', letters);
            for (let i = 0; i < letters.length; i++) {
                console.log(`letters.charAt(${i}):`, letters.charAt(i));
                tempList.push(letters.charAt(i));
                console.log('tempList push:', tempList);
                backtrack(index + 1, tempList);
                tempList.pop();
                console.log('tempList pop:', tempList);
            }
        }
    }

    backtrack(0, []);
    return combinations;
};


console.log(letterCombinations('23'));
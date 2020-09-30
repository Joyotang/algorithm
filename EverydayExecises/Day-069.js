/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';

    let res = '0';

    for (let i = num2.length - 1; i >= 0; i--) {
        let carry = 0;
        let temp = [];

        for (let k = 0; k < num2.length - 1 - i; k++) {
            temp.push(0);
        }

        let n2 = num2.charAt(i) - '0';
        for (let j = num1.length - 1; j >= 0 || carry != 0; j--) {
            let n1 = j < 0 ? 0 : num1.charAt(j) - '0';

            let product = (n1 * n2 + carry) % 10;
            temp.push(product);
            carry = Math.floor((n1 * n2 + carry) / 10);
        }
        res = addStrings(res, temp.reverse().join(''));
    }
    return res;
};
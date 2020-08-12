function plusOne(digits) {
    let len = digits.length;

    for (let i = len - 1; i >= 0; i--) {
        console.log('------digits[i]:', digits[i]);
        digits[i]++;
        console.log('------digits[i]:', digits[i]);

        digits[i] = digits[i] % 10;
        console.log('------digits[i]:', digits[i]);
        if (digits[i] !== 0) {
            console.log('-------digits[i] !== 0------');
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
}

// console.log(plusOne([9, 9, 9]));
// console.log(plusOne([1, 0]));
console.log(plusOne([1, 5]));
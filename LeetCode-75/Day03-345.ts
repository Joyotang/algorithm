function reverseVowels(s: string): string {
    // 定义元音字母集合
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const chars = Array.from(s);
    let left = 0;
    let right = chars.length - 1;
    while (left < right) {
        // 移动左指针，直到找到元音字母
        while (left < right && !vowels.has(chars[left])) {
            left++;
        }
        // 移动右指针，直到找到元音字母
        while (left < right && !vowels.has(chars[right])) {
            right--;
        }
        // 交换左右指针指向的元音字母
        if (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }

    return chars.join('');
}

console.log(reverseVowels('leetcode'));

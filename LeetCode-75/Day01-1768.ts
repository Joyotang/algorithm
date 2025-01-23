function mergeAlternately(word1: string, word2: string): string {
    let res = '';
    let i = 0;
    let j = 0;
    while (i < word1.length || j < word2.length) {
        if (i < word1.length) res += word1[i++];
        if (j < word2.length) res += word2[j++];
    }
    return res;
}

console.log(mergeAlternately('abc', 'pqr'));

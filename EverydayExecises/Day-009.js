/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s === t) return true;
    if (s.length !== t.length) return false;

    let hash = {};
    for (let i = 0; i < s.length; i++) {
        if (!hash[s[i]]) {
            hash[s[i]] = 0;
        }
        console.log('hash-s:', hash);
        hash[s[i]]++;
        console.log('hash-s:', hash);

        if (!hash[t[i]]) {
            hash[t[i]] = 0;
        }
        console.log('hash-t:', hash);
        hash[t[i]]--;
        console.log('hash-t:', hash);
    }
    for (const key in hash) {
        if (hash[key] !== 0) return false;
    }
    return true;
};


console.log(isAnagram('anagram', 'nagaram'));
// hash-s: { a: 0 }
// hash-s: { a: 1 }
// hash-t: { a: 1, n: 0 }
// hash-t: { a: 1, n: -1 }
// hash-s: { a: 1, n: -1 }
// hash-s: { a: 1, n: 0 }
// hash-t: { a: 1, n: 0 }
// hash-t: { a: 0, n: 0 }
// hash-s: { a: 0, n: 0 }
// hash-s: { a: 1, n: 0 }
// hash-t: { a: 1, n: 0, g: 0 }
// hash-t: { a: 1, n: 0, g: -1 }
// hash-s: { a: 1, n: 0, g: -1 }
// hash-s: { a: 1, n: 0, g: 0 }
// hash-t: { a: 1, n: 0, g: 0 }
// hash-t: { a: 0, n: 0, g: 0 }
// hash-s: { a: 0, n: 0, g: 0, r: 0 }
// hash-s: { a: 0, n: 0, g: 0, r: 1 }
// hash-t: { a: 0, n: 0, g: 0, r: 1 }
// hash-t: { a: 0, n: 0, g: 0, r: 0 }
// hash-s: { a: 0, n: 0, g: 0, r: 0 }
// hash-s: { a: 1, n: 0, g: 0, r: 0 }
// hash-t: { a: 1, n: 0, g: 0, r: 0 }
// hash-t: { a: 0, n: 0, g: 0, r: 0 }
// hash-s: { a: 0, n: 0, g: 0, r: 0, m: 0 }
// hash-s: { a: 0, n: 0, g: 0, r: 0, m: 1 }
// hash-t: { a: 0, n: 0, g: 0, r: 0, m: 1 }
// hash-t: { a: 0, n: 0, g: 0, r: 0, m: 0 }
// true


/* -----------------------------------The next day coding.------------------------------------- */
var isAnagram = function(s, t) {
    let hash = {};

    for (let i = 0; i < s.length; i++) {
        if (!hash[s[i]]) hash[s[i]] = 0;
        hash[s[i]]++;

        if (!hash[t[i]]) hash[t[i]] = 0;
        hash[t[i]]--;
    }

    for (const key in hash) {
        if (hash[key] !== 0) return false;
    }
    return true;
};
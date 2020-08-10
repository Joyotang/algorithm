/**
 * 49. 字母异位词分组
 * https://leetcode-cn.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = new Map();

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i].split('').sort().join('');
        if (!hash.has(str)) {
            hash.set(str, [strs[i]]);
        } else {
            let temp = hash.get(str);
            temp.push(strs[i]);
            hash.set(str, temp);
        }
    }
    return [...hash.values()];
};


/**
 * 题解二：计数
 * 首先初始化 key = "0#0#0#0#0#"，数字分别代表 abcde 出现的次数，# 用来分割。
 * 这样的话，"abb" 就映射到了 "1#2#0#0#0"。
 * "cdc" 就映射到了 "0#0#2#1#0"。
 * "dcc" 就映射到了 "0#0#2#1#0"。
 * 然后和其他解法一样，如果 key 一样，就把值映射到对应的 key 里。
 * 时间复杂度：O(NK)。
 */
var groupAnagrams = function(strs) {
    let hash = new Map();

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let arr = new Array(26).fill(0);

        for (let j = 0; j < str.length; j++) {
            arr[str.charCodeAt(j) - 97]++;
        }
        console.log(`arr-${i}: ${arr}`);

        let hashKey = arr.join('');
        if (!hash.has(hashKey)) {
            hash.set(hashKey, [str]);
        } else {
            let temp = hash.get(hashKey);
            temp.push(str);
            hash.set(hashKey, temp);
        }
        console.log(`hash-${i}: ${hash}`);
    }
    return [...hash.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

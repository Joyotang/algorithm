/**
 * 336. 回文对
 * https://leetcode-cn.com/problems/palindrome-pairs/
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
    // 用Map存每个字符串的翻转
    const map = new Map()
    // 用Set存回文对的索引，以避免重复
    const set = new Set()
    // map的key为字符串的翻转，value为字符串的索引
    words.forEach((word, i) => {
        map.set(word.split('').reverse().join(''), i)
    })
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        for (let j = 0; j <= word.length; j++) {
            // 将字符串分为左右两个字串
            const left = word.slice(0, j), right = word.slice(j)
            // 如果左字符串是回文的
            if (isPalindrom(left)) {
                // 如果map里存有右字符串且索引不是i（题目写着要不同的索引对）
                if (map.has(right) && map.get(right) !== i) {
                    // 满足前面条件的字符串为  右字符串的翻转 + 本身是回文的左字符串 + 右字符串
                    // 这是一个回文字符串，其索引对为[map.get(right),i]
                    // 因为数组没办法去重，所以用字符串表示并存入set
                    const temp = `${map.get(right)},${i}`
                    set.add(temp)
                }
            }
            // 如果右字符串是回文的
            if (isPalindrom(right)) {
                // 如果map里存有左字符串且索引不是i（题目写着要不同的索引对） 
                if (map.has(left) && map.get(left) !== i) {
                    // 满足前面条件的字符串为  左字符串 + 本身是回文的右字符串 + 左字符串的翻转
                    const temp = `${i},${map.get(left)}`
                    set.add(temp)
                }
            }
        }
    }
    // 将set中表示索引对的字符串转化为数组存到ans里
    const ans = [...set].map(v => v.split(','))
    return ans
}
// 判断是否是回文字符串
function isPalindrom(str) {
    let i = 0, j = str.length - 1
    while (i < j) {
        if (str[i] !== str[j]) {
            return false
        }
        i++
        j--
    }
    return true
}
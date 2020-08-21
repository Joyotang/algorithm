
// 递归模板
function recursion(level, maxLevel, param) {
    // terminator（终结者）- 先把[施瓦辛格]装进去
    if (level > maxLevel) {
        // process result;
        return 
    }

    // process current logic（当前层逻辑）
    process(level, param);

    // drill down（下探到下一层）
    recursion(level + 1, newParam)

    // restore current status（清扫当前层）
}
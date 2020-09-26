const buildTree = (inorder, postorder) => {
    const map = {};
    for (let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i;
    }

    const helper = (iStart, iEnd, pStart, pEnd) => {
        if (pStart > pEnd || iStart > iEnd) {
            return null;
        }
        const rootVal = postorder[pEnd];
        const mid = map[rootVal]
        const leftNodeNum = mid - iStart

        const root = new TreeNode(rootVal);
        root.left = helper(iStart, mid - 1, pStart, pStart + leftNodeNum - 1)
        root.right = helper(mid + 1, iEnd, pStart + leftNodeNum, pEnd - 1)

        return root
    };

    return helper(0, inorder.length - 1, 0, postorder.length - 1)
};



// console.log(uniquePathsWithObstacles(board));
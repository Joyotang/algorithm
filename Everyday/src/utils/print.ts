export const printMatrix = <Item>(matrix: Item[][], appendSpace = 0): void => {
    if (!matrix.length) {
        console.log("Empty matrix");
        return;
    }

    // 找到每行的最大长度，用于对齐
    const maxLength = Math.max(
        ...matrix
            .map(
                (row) => row.map(
                    (item) => String(item).length,
                ),
            )
            .flat(1),
    );

    // 递归打印每一行
    matrix.forEach((row) => {
        // 将每行的每个元素转换为固定长度的字符串，并用空格填充
        const formattedRow = row
            .map((item) => String(item).padEnd(maxLength + appendSpace, " "))
            .join(" ");
        console.log(formattedRow);
    });
};

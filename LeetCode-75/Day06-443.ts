function compress(chars: string[]): number {
    let write = 0; // 写入位置
    let read = 0; // 读取位置

    while (read < chars.length) {
        const currentChar = chars[read];
        let count = 0;

        // 统计连续字符的长度
        while (read < chars.length && chars[read] === currentChar) {
            read++;
            count++;
        }

        // 写入字符
        chars[write] = currentChar;
        write++;

        // 如果长度大于 1，写入长度
        if (count > 1) {
            const countStr = count.toString(); // 将长度转为字符串
            for (let i = 0; i < countStr.length; i++) {
                chars[write] = countStr[i]; // 将每个字符写入数组
                write++;
            }
        }
    }

    return write; // 返回新长度
}

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']));

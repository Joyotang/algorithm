function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    flowerbed.unshift(0);
    flowerbed.push(0);
    for (let i = 1; i < flowerbed.length; i++) {
        if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;
}

console.log(canPlaceFlowers([2, 3, 5, 1, 3], 3));

/**
 * 841. 钥匙和房间
 * https://leetcode-cn.com/problems/keys-and-rooms/
 * 
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let hash = new Map();
    let count = 0;

    function dfs(i) {
        if (hash.has(i)) return;

        count++;
        hash.set(i, true);

        let cols = rooms[i];
        let len = cols.length;
        for (let j = 0; j < len; j++) {
            dfs(cols[j]);
        }
    }
    dfs(0);
    return count === rooms.length;
};


/* -----------------------------------The next day coding.------------------------------------- */
var canVisitAllRooms = function(rooms) {
    let hash = new Map();
    let count = 0;

    function dfs(i) {
        if (hash.has(i)) return;

        count++;
        hash.set(i, true);

        let cols = rooms[i];
        let len = cols.length;
        for (let j = 0; j < len; j++) {
            dfs(cols[j]);
        }
    }
    dfs(0);
    return count === rooms.length;
};

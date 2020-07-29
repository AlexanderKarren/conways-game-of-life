const presets = {
    blinker,
    creeper,
    exploder,
    glider,
    pentaDecathlon,
    ripJohn,
    smallExploder,
    toad
}

export default function selectPreset(grid, preset) {
    const rowMid = Math.floor(grid.length / 2 - 1);
    const colMid = Math.floor(grid[rowMid].length / 2 - 1);

    return presets[preset](grid, rowMid, colMid);
}

function blinker(grid, rowMid, colMid) {
    grid[rowMid - 1][colMid] = 1;
    grid[rowMid][colMid] = 1;
    grid[rowMid + 1][colMid] = 1;
}

function creeper(grid, rowMid, colMid) {
    grid[rowMid - 6][colMid - 1] = 1;
    grid[rowMid - 6][colMid - 2] = 1;
    grid[rowMid - 6][colMid] = 1;
    grid[rowMid - 6][colMid + 1] = 1;
    grid[rowMid - 6][colMid + 2] = 1;
    grid[rowMid - 5][colMid - 2] = 1;
    grid[rowMid - 5][colMid] = 1;
    grid[rowMid - 5][colMid + 2] = 1;
    grid[rowMid - 4][colMid - 1] = 1;
    grid[rowMid - 4][colMid - 2] = 1;
    grid[rowMid - 4][colMid] = 1;
    grid[rowMid - 4][colMid + 1] = 1;
    grid[rowMid - 4][colMid + 2] = 1;
    grid[rowMid - 3][colMid - 2] = 1;
    grid[rowMid - 3][colMid + 2] = 1;
    grid[rowMid - 2][colMid - 2] = 1;
    grid[rowMid - 2][colMid] = 1;
    grid[rowMid - 2][colMid + 2] = 1;
    grid[rowMid - 1][colMid - 1] = 1;
    grid[rowMid - 1][colMid - 2] = 1;
    grid[rowMid - 1][colMid] = 1;
    grid[rowMid - 1][colMid + 1] = 1;
    grid[rowMid - 1][colMid + 2] = 1;
    grid[rowMid][colMid - 1] = 1;
    grid[rowMid][colMid] = 1;
    grid[rowMid][colMid + 1] = 1;
    grid[rowMid + 1][colMid - 1] = 1;
    grid[rowMid + 1][colMid] = 1;
    grid[rowMid + 1][colMid + 1] = 1;
    grid[rowMid + 2][colMid - 1] = 1;
    grid[rowMid + 2][colMid] = 1;
    grid[rowMid + 2][colMid + 1] = 1;
    grid[rowMid + 3][colMid - 1] = 1;
    grid[rowMid + 3][colMid] = 1;
    grid[rowMid + 3][colMid + 1] = 1;
    grid[rowMid + 4][colMid - 1] = 1;
    grid[rowMid + 4][colMid] = 1;
    grid[rowMid + 4][colMid + 1] = 1;
    grid[rowMid + 5][colMid - 1] = 1;
    grid[rowMid + 5][colMid] = 1;
    grid[rowMid + 5][colMid + 1] = 1;
    grid[rowMid + 6][colMid - 1] = 1;
    grid[rowMid + 6][colMid - 2] = 1;
    grid[rowMid + 6][colMid - 3] = 1;
    grid[rowMid + 6][colMid + 1] = 1;
    grid[rowMid + 6][colMid + 2] = 1;
    grid[rowMid + 6][colMid + 3] = 1;
    grid[rowMid + 7][colMid - 1] = 1;
    grid[rowMid + 7][colMid - 2] = 1;
    grid[rowMid + 7][colMid - 3] = 1;
    grid[rowMid + 7][colMid + 1] = 1;
    grid[rowMid + 7][colMid + 2] = 1;
    grid[rowMid + 7][colMid + 3] = 1;
    grid[rowMid + 8][colMid - 1] = 1;
    grid[rowMid + 8][colMid - 2] = 1;
    grid[rowMid + 8][colMid - 3] = 1;
    grid[rowMid + 8][colMid + 1] = 1;
    grid[rowMid + 8][colMid + 2] = 1;
    grid[rowMid + 8][colMid + 3] = 1;
}

function exploder(grid, rowMid, colMid) {
    grid[rowMid][colMid] = 1;
    grid[rowMid][colMid - 2] = 1;
    grid[rowMid][colMid + 2] = 1;
    grid[rowMid + 1][colMid - 2] = 1;
    grid[rowMid + 1][colMid + 2] = 1;
    grid[rowMid + 2][colMid - 2] = 1;
    grid[rowMid + 2][colMid + 2] = 1;
    grid[rowMid + 3][colMid - 2] = 1;
    grid[rowMid + 3][colMid + 2] = 1;
    grid[rowMid + 4][colMid - 2] = 1;
    grid[rowMid + 4][colMid] = 1;
    grid[rowMid + 4][colMid + 2] = 1;
}

function glider(grid, rowMid, colMid) {
    grid[rowMid][colMid] = 1;
    grid[rowMid + 1][colMid + 1] = 1;
    grid[rowMid + 2][colMid - 1] = 1;
    grid[rowMid + 2][colMid] = 1;
    grid[rowMid + 2][colMid + 1] = 1;
}

function pentaDecathlon(grid, rowMid, colMid) {
    grid[rowMid - 5][colMid - 1] = 1;
    grid[rowMid - 5][colMid] = 1;
    grid[rowMid - 5][colMid + 1] = 1;
    grid[rowMid - 4][colMid] = 1;
    grid[rowMid - 3][colMid] = 1;
    grid[rowMid - 2][colMid - 1] = 1;
    grid[rowMid - 2][colMid] = 1;
    grid[rowMid - 2][colMid + 1] = 1;
    grid[rowMid][colMid - 1] = 1;
    grid[rowMid][colMid] = 1;
    grid[rowMid][colMid + 1] = 1;
    grid[rowMid + 1][colMid - 1] = 1;
    grid[rowMid + 1][colMid] = 1;
    grid[rowMid + 1][colMid + 1] = 1;
    grid[rowMid + 3][colMid - 1] = 1;
    grid[rowMid + 3][colMid] = 1;
    grid[rowMid + 3][colMid + 1] = 1;
    grid[rowMid + 4][colMid] = 1;
    grid[rowMid + 5][colMid] = 1;
    grid[rowMid + 6][colMid - 1] = 1;
    grid[rowMid + 6][colMid] = 1;
    grid[rowMid + 6][colMid + 1] = 1;
}

function ripJohn(grid, rowMid, colMid) {
    grid[rowMid - 4][colMid - 1] = 1;
    grid[rowMid - 4][colMid] = 1;
    grid[rowMid - 4][colMid + 1] = 1;
    grid[rowMid - 3][colMid - 1] = 1;
    grid[rowMid - 3][colMid + 1] = 1;
    grid[rowMid - 2][colMid - 1] = 1;
    grid[rowMid - 2][colMid + 1] = 1;
    grid[rowMid - 1][colMid] = 1;
    grid[rowMid][colMid - 3] = 1;
    grid[rowMid][colMid - 1] = 1;
    grid[rowMid][colMid + 1] = 1;
    grid[rowMid][colMid] = 1;
    grid[rowMid + 1][colMid - 2] = 1;
    grid[rowMid + 1][colMid] = 1;
    grid[rowMid + 1][colMid + 2] = 1;
    grid[rowMid + 2][colMid] = 1;
    grid[rowMid + 2][colMid + 3] = 1;
    grid[rowMid + 3][colMid - 1] = 1;
    grid[rowMid + 3][colMid + 1] = 1;
    grid[rowMid + 4][colMid - 1] = 1;
    grid[rowMid + 4][colMid + 1] = 1;
}

function smallExploder(grid, rowMid, colMid) {
    grid[rowMid - 1][colMid] = 1;
    grid[rowMid][colMid] = 1;
    grid[rowMid][colMid + 1] = 1;
    grid[rowMid][colMid - 1] = 1;
    grid[rowMid + 1][colMid - 1] = 1;
    grid[rowMid + 1][colMid + 1] = 1;
    grid[rowMid + 2][colMid] = 1;

    return grid;
}

function toad(grid, rowMid, colMid) {
    grid[rowMid][colMid - 1] = 1;
    grid[rowMid][colMid] = 1;
    grid[rowMid][colMid + 1] = 1;
    grid[rowMid + 1][colMid - 2] = 1;
    grid[rowMid + 1][colMid - 1] = 1;
    grid[rowMid + 1][colMid] = 1;
}
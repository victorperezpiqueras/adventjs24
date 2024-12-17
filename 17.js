/* The Grinch has been up to his tricks in the North Pole and has planted explosive coal bombs 💣 in the elves' toy factory. He wants all the toys to be rendered useless, and that's why he has left a grid where some cells have explosive coal (true) and others are empty (false).

The elves need your help to map the dangerous areas. Each empty cell should display a number indicating how many explosive coal bombs there are in the adjacent positions, including diagonals.

detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, false],
  [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
  [true, true],
  [false, false],
  [true, true]
])

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]

Note: Want a hint? You've surely played the Minesweeper game before… 😉
*/

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  // 1 star
  let gridCounter = [];
  for (let i = 0; i < grid.length; i++) {
    gridCounter.push([]);
    for (let j = 0; j < grid[i].length; j++) {
      const bombCount =
        Number(grid[i - 1]?.[j] || 0) +
        Number(grid[i + 1]?.[j] || 0) +
        Number(grid[i]?.[j - 1] || 0) +
        Number(grid[i]?.[j + 1] || 0) +
        Number(grid[i - 1]?.[j - 1] || 0) +
        Number(grid[i + 1]?.[j - 1] || 0) +
        Number(grid[i - 1]?.[j + 1] || 0) +
        Number(grid[i + 1]?.[j + 1] || 0);
      gridCounter[i].push(bombCount);
    }
  }
  return gridCounter;
}

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  // 3 stars
  let gridCounter = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0)
  );
  function increment(row, col, value) {
    if (
      row >= 0 &&
      row < gridCounter.length &&
      col >= 0 &&
      col < gridCounter[0].length
    ) {
      gridCounter[row][col] += value;
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const value = Number(grid[i][j]);
      increment(i - 1, j - 1, value);
      increment(i - 1, j, value);
      increment(i - 1, j + 1, value);

      increment(i, j - 1, value);
      increment(i, j + 1, value);

      increment(i + 1, j - 1, value);
      increment(i + 1, j, value);
      increment(i + 1, j + 1, value);
    }
  }
  return gridCounter;
}

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  // 4 stars
  let gridCounter = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0)
  );
  function increment(row, col, value) {
    gridCounter[row]?.[col] !== undefined &&
      (gridCounter[row][col] = gridCounter[row][col] + value);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const value = Number(grid[i][j]);
      increment(i - 1, j - 1, value);
      increment(i - 1, j, value);
      increment(i - 1, j + 1, value);

      increment(i, j - 1, value);
      increment(i, j + 1, value);

      increment(i + 1, j - 1, value);
      increment(i + 1, j, value);
      increment(i + 1, j + 1, value);
    }
  }
  return gridCounter;
}

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  // 3 stars
  let gridCounter = grid.map((row) => [...row]);
  function increment(row, col) {
    return Number(grid[row]?.[col] || 0);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      gridCounter[i][j] =
        increment(i - 1, j - 1) +
        increment(i - 1, j) +
        increment(i - 1, j + 1) +
        increment(i, j - 1) +
        increment(i, j + 1) +
        increment(i + 1, j - 1) +
        increment(i + 1, j) +
        increment(i + 1, j + 1);
    }
  }
  return gridCounter;
}

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  // 5 stars, using zero bounds
  let gridCounter = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0)
  );

  // add borders on left, right, top and down with zero values to avoid out of bounds checks
  let extendedGrid = grid.map((row) => [false, ...row, false]);
  const emptyRow = Array.from({ length: extendedGrid[0].length }, () => false);
  extendedGrid.push(emptyRow);
  extendedGrid.unshift(emptyRow);

  for (let i = 1; i < extendedGrid.length - 1; i++) {
    for (let j = 1; j < extendedGrid[i].length - 1; j++) {
      gridCounter[i - 1][j - 1] =
        extendedGrid[i - 1][j - 1] +
        extendedGrid[i - 1][j] +
        extendedGrid[i - 1][j + 1] +
        extendedGrid[i][j - 1] +
        extendedGrid[i][j + 1] +
        extendedGrid[i + 1][j - 1] +
        extendedGrid[i + 1][j] +
        extendedGrid[i + 1][j + 1];
    }
  }
  return gridCounter;
}

const res = detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]);
for (let index = 0; index < res.length; index++) {
  const element = res[index];
  console.log(element);
}

function moveTrain(board, mov) {
  // 2 stars
  const engine = "@";
  const wagon = "o";
  const magicFruit = "*";
  const emptySpace = "·";

  const engineY = board.findIndex((row) => row.includes(engine));
  const engineX = board[engineY].indexOf(engine);

  const actions = {
    U: (x, y) => [x, y - 1],
    D: (x, y) => [x, y + 1],
    R: (x, y) => [x + 1, y],
    L: (x, y) => [x - 1, y],
  };

  const [newX, newY] = actions[mov](engineX, engineY);

  if (
    newY < 0 || // seems that this is needed to not get TypeError: Cannot read properties of undefined (reading '2')
    newY >= board.length ||
    newX < 0 ||
    newX >= board[newY]?.length
  ) {
    return "crash";
  }

  const results = {
    [wagon]: "crash",
    [magicFruit]: "eat",
    [emptySpace]: "none",
  };

  return results[board[newY][newX]];
}

function moveTrain(board, mov) {
  // 5 stars
  const engine = "@";
  const wagon = "o";
  const magicFruit = "*";
  const emptySpace = "·";

  const engineY = board.findIndex((row) => row.includes(engine));
  const engineX = board[engineY].indexOf(engine);

  const actions = {
    U: (x, y) => [x, y - 1],
    D: (x, y) => [x, y + 1],
    R: (x, y) => [x + 1, y],
    L: (x, y) => [x - 1, y],
  };

  const [newX, newY] = actions[mov](engineX, engineY);

  const results = {
    [wagon]: "crash",
    [magicFruit]: "eat",
    [emptySpace]: "none",
  };

  return board[newY]?.[newX] ? results[board[newY][newX]] : "crash";
}

let board = ["·····", "*····", "@····", "o····", "o····"];
board = ["@····", "·····", "·····", "·····", "·····"]; // check out of bounds properly handled
console.log(moveTrain(board, "U"));

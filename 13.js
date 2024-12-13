/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  // 1 star: first working solution (and a few nonworking more before)
  const decorators = {
    "*": (movs, i) => movs[i + 1],
    "!": (movs, i) => {
      const opposites = {
        L: "R",
        R: "L",
        U: "D",
        D: "U",
      };
      movs[i + 1] = opposites[movs[i + 1]];
      return "";
    },
    "?": (movs, i) => {
      const firstMovementIndex = movs.findIndex((elem) => movs[i + 1] === elem);
      const isRepeated = firstMovementIndex < i;
      if (isRepeated) movs[i + 1] = "";
      return "";
    },
  };

  let stepMoves = moves.split("");
  for (let index = 0; index < stepMoves.length; index++) {
    const move = stepMoves[index];
    let decoratorFun = decorators[move];
    let transformedValue = decoratorFun ? decoratorFun(stepMoves, index) : move;
    stepMoves[index] = transformedValue;
  }
  console.log(stepMoves.join(""));

  const movementSet = {
    L: (x, y) => [x - 1, y],
    R: (x, y) => [x + 1, y],
    U: (x, y) => [x, y + 1],
    D: (x, y) => [x, y - 1],
  };

  const [robotX, robotY] = stepMoves
    .filter((value) => !!value.length)
    .reduce(
      ([xTotal, yTotal], currentMove) => {
        return movementSet[currentMove](xTotal, yTotal);
      },
      [0, 0]
    );
  return (robotX == 0 && robotY == 0) || [robotX, robotY];
}

function isRobotBack(moves) {
  // 5 stars
  const visited = {
    L: false,
    R: false,
    U: false,
    D: false,
  };
  // didnt find a cleaner why to get the opposites without transforming all letters to [x,y] values
  const opposites = {
    L: "R",
    R: "L",
    U: "D",
    D: "U",
  };
  const modifiers = {
    "*": (mov) => [mov, mov], // duplicates
    "!": (mov) => [opposites[mov]], // opposite value
    "?": (mov) => {
      // nothing if visited, else the value
      return visited[mov] ? [] : [mov];
    },
  };
  const movementSet = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, 1],
    D: [0, -1],
  };
  let i = 0;
  // find pairs of symbol + letter or just the letter
  const stepMoves = moves.match(/([*!?]?[LRUD])/g);
  let x = 0;
  let y = 0;
  while (i < stepMoves.length) {
    const stepMove = stepMoves[i].split("");
    // [symbol?, move]
    const move = stepMove.at(-1);
    let modifiedSteps = modifiers[stepMove[0]]?.(move);
    modifiedSteps ??= [move]; // if no modifier, just the move
    modifiedSteps.forEach((step) => {
      // foreach needed due to modifiers returning []
      const [newx, newY] = movementSet[step];
      x += newx;
      y += newY;
      // important to mark visited after move is transformed
      visited[step] = true;
    });
    i++;
  }

  return (x == 0 && y == 0) || [x, y];
}

console.log(isRobotBack("U?U"));

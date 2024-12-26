/* 
The elves at the North Pole have created a special robot 🤖 that helps Santa Claus distribute gifts inside a large warehouse. The robot moves on a 2D plane and we start from the origin (0, 0).

We want to know if, after executing a series of movements, the robot returns to exactly where it started.

The robot's basic commands are:

    L: Move to the left
    R: Move to the right
    U: Move upwards
    D: Move downwards

But it also has certain modifiers for the movements:

    *: The movement is done with double intensity (e.g., *R means RR)
    !: The next movement is inverted (e.g., R!L is considered as RR)
    ?: The next movement is done only if it hasn't been done before (e.g., R?R means R)

Note: When the movement is inverted with ! the inverted movement is counted and not the original one. For example, !U?U inverts the U movement, so it counts as having done the D movement but not the U. Thus, !U?U translates to D?U, and therefore, the final U movement is done.

You must return:

    true: if the robot returns exactly to where it started
    [x, y]: if the robot does not return to where it started, return the position where it stopped

isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true

// Step-by-step examples:
isRobotBack('R!U?U') // [1,0]
// 'R'  -> moves to the right 
// '!U' -> inverts and becomes 'D'
// '?U' -> moves upwards, because the 'U' movement hasn't been done yet

isRobotBack('UU!U?D') // [0,1]
// 'U'  -> moves upwards
// 'U'  -> moves upwards
// '!U' -> inverts and becomes 'D'
// '?D' -> does not move, since the 'D' movement has already been done
*/

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

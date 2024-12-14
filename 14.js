/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  reindeer.sort((a, b) => b - a);
  stables.sort((a, b) => b - a);

  let moves = 0;
  reindeer.forEach((elem, i) => {
    moves += Math.abs(reindeer[i] - stables[i]);
  });
  return moves;

}

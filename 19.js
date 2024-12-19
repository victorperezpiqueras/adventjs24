/* 
The day to give out gifts is approaching! We need to stack the gifts we will transport on the sleigh 🛷, and for that, we are going to put them in boxes 📦.

The gifts can be placed in 4 different boxes, where each box can hold weights of 1, 2, 5, and 10, represented as follows:

    _
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|

_________
10: |         |
    |_________|

// JavaScript representation:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}

Your mission is, upon receiving the weight of the gifts, to use the fewest boxes possible and also stack them from less weight (top) to more weight (bottom). Always aligned to the left.

Additionally, keep in mind that when stacking them, the lower edge of the box is reused.

distributeWeight(1)
// Returns:
//  _
// |_|

distributeWeight(2)
// Returns:
//  ___
// |___|

distributeWeight(3)
// Returns:
//  _
// |_|_
// |___|

distributeWeight(4)
// Returns:
//  ___
// |___|
// |___|

distributeWeight(5)
// Returns:
//  _____
// |     |
// |_____|

distributeWeight(6)
// Returns:
//  _
// |_|___
// |     |
// |_____|

Note: Be careful with the white spaces! Do not add whitespace to the right of a box unless necessary.
*/

/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  // 5 stars (remove comments to validate)
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };
  // for greedy: from higher to lower box
  const boxSizes = Object.keys(boxRepresentations).sort((a, b) => b - a);

  // greedy algorithm for box selection
  let boxes = [];
  let currentWeight = weight;
  while (currentWeight > 0) {
    for (let i = 0; i < boxSizes.length; i++) {
      const boxSize = Number(boxSizes[i]);
      if (currentWeight >= boxSize) {
        boxes.push(boxSize);
        currentWeight -= boxSize;
        break;
      }
    }
  }

  // printing of boxes
  let boxesStrList = [...boxRepresentations[boxes[0]]]; // first one to avoid 1 if
  for (let index = 1; index < boxes.length; index++) {
    const box = boxes[index];
    const boxElems = [...boxRepresentations[box]];

    const currentBoxLowerPart = boxElems.at(-1);
    const prevBoxUpperPart = boxRepresentations[boxes[index - 1]].at(0);
    // merge the line between boxes as the upper box + the remaining space in chars of the bottom box
    const inBetweenBoxes =
      currentBoxLowerPart +
      prevBoxUpperPart?.slice(currentBoxLowerPart.length).replace(" ", ""); // need to remove last space or it complains
    // remove bottom part of new box, and put it first on the array of strings: [currBox from top to bottom:intermediate part:prevBox]
    boxElems.pop();
    boxesStrList[0] = inBetweenBoxes;
    boxesStrList = [...boxElems, ...boxesStrList];
  }
  return boxesStrList.join("\n");
}

const start = 1;
const limit = 6;

for (let i = start; i <= limit; i++) {
  console.log(`${i}:`);
  console.log(distributeWeight(i));
  console.log("========================");
}

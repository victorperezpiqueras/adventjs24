/* 
Santa Claus 🎅 is checking a list of unique toys that he might include in his magic gift bag. He wants to explore all possible combinations of toys. He wants to see all combinations that actually contain at least one toy.

Your task is to write a function that, given an array of toys, returns all possible combinations.

Important: You must return it in the order the toys appear and in combinations from 1 to n toys.

generateGiftSets(['car', 'doll', 'puzzle'])
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(['ball'])
// [
//   ['ball']
// ]

generateGiftSets(['game', 'pc'])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]

Note: The input array will always have at least one toy and there will never be duplicate toys.

Tip: There are many ways to solve this problem, but backtracking might be a good option. 😉 
*/

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  // jugar con la length
  let combinations = [];
  // Array length
  for (let i = 0; i < gifts.length; i++) {
    for (let j = 0; j < gifts.length; j++) {
      let giftsToSelect = Array.from(new Set(gifts.slice(undefined, i + 1))); //null, i
      combinations.concat(giftsToSelect);
      console.log(giftsToSelect);
    }
  }
  // Code here
  return combinations;
}

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  // 1 star
  let sols = [];
  if (gifts.length == 0) return [];
  for (let index = 0; index < gifts.length; index++) {
    const otherGifts = [...gifts];
    otherGifts.splice(index, 1);
    if (otherGifts.length > 0) {
      const otherGifts2 = generateGiftSets(otherGifts);
      sols = otherGifts2.concat(sols);
    }
  }
  sols.push(gifts);

  let solsMap = new Map();

  sols.forEach((elem) => {
    solsMap.set(elem.join(""), elem);
  });

  const calculateKey = (elem) =>
    elem
      .map((e) => 10 ** (gifts.length - gifts.indexOf(e)))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const sortedArray = Array.from(solsMap.values())
    .map((arr) => ({
      arr,
      key: calculateKey(arr),
    }))
    .sort((a, b) => {
      if (a.arr.length !== b.arr.length) {
        return a.arr.length - b.arr.length;
      }
      return b.key - a.key;
    })
    .map((item) => item.arr);

  return sortedArray;
}

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  // 1 star
  let sols = [];
  if (gifts.length == 0) return [];
  for (let index = 0; index < gifts.length; index++) {
    const otherGifts = [...gifts];
    otherGifts.splice(index, 1);
    if (otherGifts.length > 0) {
      const otherGifts2 = generateGiftSets(otherGifts);
      sols = otherGifts2.concat(sols);
    }
  }
  sols.push(gifts);

  const referenceIndex = new Map(gifts.map((str, index) => [str, index])); // Create a map for fast lookup

  let solsMap = new Map();

  sols.forEach((elem) => {
    solsMap.set(elem.join(""), elem);
  });
  sols = Array.from(solsMap.values());

  return sols.sort((a, b) => {
    // Sort primarily by length
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    // For arrays of the same length, compare elements by reference order
    for (let i = 0; i < a.length; i++) {
      const indexA = referenceIndex.get(a[i]) || Infinity; // Use Infinity for missing strings
      const indexB = referenceIndex.get(b[i]) || Infinity; // Use Infinity for missing strings
      if (indexA !== indexB) {
        return indexB - indexA;
      }
    }
    return 0; // If all elements are the same, keep the order unchanged
  });
}

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  // 1 star
  /* if (gifts.length <= 0) return []; */
  //gifts.reverse();
  let sols = [];
  for (let index = 0; index < gifts.length; index++) {
    const otherGifts = [...gifts];
    otherGifts.splice(index, 1);
    //     otherGifts.splice(gifts.length - index - 1, 1);

    if (otherGifts.length > 0) {
      const otherGifts2 = generateGiftSets(otherGifts);
      //sols = sols.concat(otherGifts2);
      sols = otherGifts2.concat(sols);
    }
  }
  sols.push(gifts);
  //sols.unshift(gifts);

  sols = Array.from(
    new Set(sols.map(JSON.stringify)) // Convert arrays to strings
  ).map(JSON.parse);

  /* sols = sols.sort((a, b) => {
    return a.length - b.length;
  }); */

  const calculateKey = (arr) =>
    arr.map((char) => gifts.indexOf(char) + 1).join("");

  // Sort the array of arrays based on the calculated key

  if (gifts.length == 4) {
    console.log(sols);
  }

  sols.sort((a, b) => {
    const keyA = Number(calculateKey(a));
    const keyB = Number(calculateKey(b));
    return keyA - keyB;
  });
  /*   sols = Object.values(
    sols.reduce((groups, subarray) => {
      const len = subarray.length;
      groups[len] = groups[len] || [];
      groups[len].push(subarray);
      return groups;
    }, {})
  ).flatMap((group) => group.reverse()); */

  /*   const calculateKey = (arr) =>
    arr.reduce((sum, char) => sum + gifts.indexOf(char), 0);

  const sortedArray = sols.sort((a, b) => {
    const keyA = calculateKey(a);
    const keyB = calculateKey(b);
    return keyA - keyB; // Compare keys numerically
  }); */

  return sols.filter((arr) => arr.length > 0);
}

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  let solsMap = new Map();
  for (let index = 0; index < gifts.length; index++) {
    const otherGifts = gifts.slice(0, index).concat(gifts.slice(index + 1));
    if (otherGifts.length > 0) {
      const otherGifts2 = generateGiftSets(otherGifts);
      otherGifts2.forEach((giftSet) => {
        const key = giftSet.map((gift) => gifts.indexOf(gift)).join(",");
        solsMap.set(key, giftSet);
      });
    }
  }

  solsMap.set(JSON.stringify(gifts), gifts);

  const calculateKey = (arr) =>
    arr.map((char) => gifts.indexOf(char) + 1).join("");

  let sols = Array.from(solsMap.values());

  sols.sort((a, b) => {
    const keyA = Number(calculateKey(a));
    const keyB = Number(calculateKey(b));
    return keyA - keyB;
  });

  return sols.filter((arr) => arr.length > 0);
}

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  // 5 stars after checking backtracking algorithms
  let sols = [];
  const recursive = (start, result) => {
    if (result.length > 0) sols.push([...result]);

    for (let i = start; i < gifts.length; i++) {
      const elem = gifts[i];
      result.push(elem);
      recursive(i + 1, result);
      result.pop();
    }
  };
  recursive(0, []);

  sols.sort((a, b) => a.length - b.length);
  return sols;
}

const test1 = ["car"];
const test2 = ["car", "doll"];
const test3 = ["car", "doll", "puzzle"];
const test4 = ["a", "b", "c", "d"];
const test5 = [];
const res = generateGiftSets(test4);
for (let i = 0; i < res.length; i++) {
  console.log(res[i]);
}

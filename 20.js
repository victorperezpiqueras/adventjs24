/*
Santa Claus 🎅 is checking the list of gifts he must deliver this Christmas. However, some gifts are missing, others are duplicated, and some have incorrect quantities. He needs your help to solve the problem.

You will receive two arrays:

    received: List with the gifts Santa currently has.
    expected: List with the gifts Santa should have.

Your task is to write a function that, given received and expected, returns an object with two properties:

    missing: An object where the keys are the names of the missing gifts and the values are the quantities that are missing.
    extra: An object where the keys are the names of the extra or duplicated gifts and the values are the quantities that are extra.

Keep in mind that:

    Gifts may be repeated in both lists.
    The gift lists are unordered.
    If there are no missing or extra gifts, the corresponding properties (missing or extra) should be empty objects.

fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Returns:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
)
// Returns:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Returns:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Returns:
// {
//   missing: {},
//   extra: {}
// }
*/

/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 *
 *
 */
function fixGiftList(received, expected) {
  // 5 stars
  let count = {};
  received.forEach((gift) => {
    count[gift] ??= 0;
    count[gift] += 1; // if it was delivered, there is 1 extra gift
  });
  expected.forEach((gift) => {
    count[gift] ??= 0;
    count[gift] -= 1; // if it was expected, there is 1 missing gift
  });

  let missing = {};
  let extra = {};
  Object.keys(count).forEach((gift) => {
    if (count[gift] > 0) {
      extra[gift] = Math.abs(count[gift]);
    } else if (count[gift] < 0) {
      missing[gift] = Math.abs(count[gift]);
    }
  });

  return {
    missing,
    extra,
  };
}

const res = fixGiftList(
  ["puzzle", "car", "doll", "car"],
  ["car", "puzzle", "doll", "ball"]
);

console.log(res.missing, res.extra);

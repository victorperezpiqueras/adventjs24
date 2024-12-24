/* 
The elves are working on a system to verify children's gift lists 👧👦. However, some lists are incomplete and numbers are missing!

Your task is to write a function that, given an array of numbers, finds all the numbers that are missing between 1 and n (where n is the size of the array or the highest number in the array).

Keep in mind that:

    Numbers may appear more than once and others may be missing
    The array always contains positive integers
    Counting always starts from 1

findMissingNumbers([1, 2, 4, 6])
// [3, 5]

findMissingNumbers([4, 8, 7, 2])
// [1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1])
// []

findDisappearedNumbers([5, 5, 5, 3, 3, 2, 1])
// [4]
*/

/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  // 4 stars
  let missing = [];
  for (let index = 1; index < Math.max(...nums); index++) {
    if (nums.indexOf(index) == -1) {
      missing.push(index);
    }
  }
  return missing;
}

/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  // 4 stars
  const numSet = new Set(nums);
  const maxNum = Math.max(...numSet);
  const fullSet = Array.from({ length: maxNum }, (_, index) => index + 1);
  return [...fullSet].filter((elem) => !numSet.has(elem));
}

/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  // 4 stars
  return Array.from(
    { length: Math.max(...nums) },
    (_, index) => index + 1
  ).filter((elem) => !new Set(nums).has(elem));
}

/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  // 4 stars
  const maxNum = Math.max(...nums);
  const fullSet = Array.from({ length: maxNum }, (_, index) => index + 1);
  const res = fullSet.reduce((accumulator, currentValue, index) => {
    if (!nums.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  return res;
}

/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  // 4 stars
  const numSet = new Set(nums);
  const maxNum = Math.max([...numSet, nums.length]);
  let missing = [];
  for (let index = 1; index < maxNum; index++) {
    if (!numSet.has(index)) {
      missing.push(index);
    }
  }
  return missing;
}

/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  // 5 stars
  const numSet = new Set(nums);
  const baseArray = Array.from(
    { length: Math.max(...nums) },
    (_, index) => index + 1
  );

  return [...new Set(baseArray).difference(numSet)]; //ECMAScript 2025...
}

const test1 = [1, 2, 4, 6];
const test2 = [5, 5, 5, 3, 3, 2, 1];
console.log(findMissingNumbers(test2));

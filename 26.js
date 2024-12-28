/* 
Santa Claus has already delivered all the presents! Now he's reviewing the productivity reports of the elves. But there's a problem: the Product Owner, Mrs. Claus 🧑‍🎄✨, needs to quickly understand if the elves met the estimated times. They are doing Agile Scream.

To help Mrs. Claus, your task is to calculate the completed percentage of each task and return it rounded to the nearest whole number. This will allow her to better plan for the next Christmas and keep everyone happy.

This is the function she's expecting:

getCompleted('01:00:00', '03:00:00') // 33%
getCompleted('02:00:00', '04:00:00') // 50%
getCompleted('01:00:00', '01:00:00') // 100%
getCompleted('00:10:00', '01:00:00') // 17%
getCompleted('01:10:10', '03:30:30') // 33%
getCompleted('03:30:30', '05:50:50') // 60%

🎁 Now Santa Claus and the elves deserve a break. We hope they enjoyed AdventJS and will recommend it to their friends!
*/

/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
  const timeWorkedSeconds = timeWorked
    .split(":")
    .reduce((acc, time) => 60 * acc + +time);
  const totalTimeSeconds = totalTime
    .split(":")
    .reduce((acc, time) => 60 * acc + +time);
  const percentage = Math.round((timeWorkedSeconds / totalTimeSeconds) * 100);
  return `${percentage}%`;
}

console.log(getCompleted("01:00:00", "03:00:00"));

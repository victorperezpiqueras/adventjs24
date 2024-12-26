/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  // timeouts
  let returnPackage = "";
  let i = 0;

  while (i < packages.length) {
    let char = packages[i];
    if (char === "(") {
      let closingBracketIndex =
        packages.length - 1 - [...packages].reverse().join("").indexOf(")");
      let fixedPackagesBrackets = fixPackages(
        packages.slice(i + 1, closingBracketIndex)
      );
      returnPackage += [...fixedPackagesBrackets].reverse().join("");
      i = closingBracketIndex + 1;
    } else {
      returnPackage += char;
      i += 1;
    }
  }

  return returnPackage;
}

// Example usage:
console.log(fixPackages("abc(def(gh)i)jk")); // Expected output: 'abcighfedjk'

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  // gpt spoiled solution
  let stack = [];
  let returnPackage = "";
  let temp = [];

  for (let char of packages) {
    if (char === "(") {
      // Push the current result to the stack and start a new temp
      stack.push(returnPackage);
      returnPackage = "";
    } else if (char === ")") {
      // Reverse the current result and append to the previous context
      returnPackage = stack.pop() + returnPackage.split("").reverse().join("");
    } else {
      // Add regular characters to the result
      returnPackage += char;
    }
  }

  return returnPackage;
}

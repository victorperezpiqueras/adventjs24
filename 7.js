function fixPackages(packages) {
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

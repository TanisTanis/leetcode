function binaryPatternMatching(pattern, s) {
  if (pattern === "" || s === "") return 0;
  if (typeof pattern !== "string" || typeof s !== "string") {
    throw new Error("Invalid inputs");
  }

  const patternLength = pattern.length;

  let consonants = "bcdfghjklmnpqrstvwxz";
  let vowels = "aeiouy";

  let validSubstrings = 0;

  for (let i = 0; i < s.length - patternLength + 1; i++) {
    let stringQueue = s.slice(i, i + patternLength + 1).split("");
    let patternQueue = pattern.slice().split("");
    let validPattern = true;

    while (validPattern && stringQueue.length > 0) {
      let letter = stringQueue.shift();
      let p = patternQueue.shift();

      if (p === "0") {
        if (vowels.indexOf(letter.toLowerCase()) === -1) {
          validPattern = false;
        }
      }
      if (p === "1") {
        if (consonants.indexOf(letter.toLowerCase()) === -1) {
          validPattern = false;
        }
      }
    }
    if (validPattern) {
      validSubstrings++;
    }
  }

  return validSubstrings;
}

module.exports = binaryPatternMatching;

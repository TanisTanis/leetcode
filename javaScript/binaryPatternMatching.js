function binaryPatternMatching(pattern, s) {
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

console.log(binaryPatternMatching("0", "y"));

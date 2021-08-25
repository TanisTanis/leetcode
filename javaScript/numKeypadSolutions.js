// function numKeypadSolutions(wordList, keypads) {
//   //wordlist is array of strings, //the valid words to check against each keypad
//   //keypads is an array of strings, this time it is the keypads we are given to use

//   let results = [];

//   for (let keypad of keypads) {
//     let mandatoryLetter = keypad[0];
//     let keyPadMap = {};
//     for (let i = 0; i < keypad.length; i++) {
//       keyPadMap[keypad[i]] = true;
//     }

//     let count = 0;
//     for (let word of wordList) {
//       let allLettersExistInKeypad = true;
//       if (word.indexOf(mandatoryLetter) === -1) {
//         continue;
//       }
//       for (let i = 0; i < word.length; i++) {
//         let letterInWord = word[i];
//         if (!keyPadMap[letterInWord]) {
//           allLettersExistInKeypad = false;
//           continue;
//         }
//       }
//       if (allLettersExistInKeypad) {
//         count++;
//       }
//     }
//     results.push(count);
//   }

//   return results;
// }

function numKeypadSolutions(wordList, keypads) {
  let results = [];

  for (let keypad of keypads) {
    let count = 0;
    const map = {};
    keypad.split("").forEach((letter) => (map[letter] = true));
    let key = keypad[0];

    let validWords = wordList.filter((word) => word.includes(key));
    validWords.forEach((word) => {
      let invalid = false;
      word.split("").forEach((letter) => {
        if (!map[letter]) {
          invalid = true;
        }
      });
      if (!invalid) {
        count++;
      }
    });
    results.push(count);
  }

  return results;
}

console.log(
  numKeypadSolutions(
    ["APPLE", "PLEAS", "PLEASE"],
    ["AELWXYZ", "AELPXYZ", "AELPSXY", "SAELPRT", "XAEBKSY"]
  )
);

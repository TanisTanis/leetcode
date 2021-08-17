var findNumOfValidWords = function (words, puzzles) {
  let answers = [];

  while (puzzles.length > 0) {
    const currentPuzzle = puzzles[0];
    const mandatoryLetter = currentPuzzle[0];
    const restOfLettersInPuzzle = currentPuzzle.slice(1);

    let validWords = 0;

    for (let i = 0; i < words.length; i++) {
      let currentWord = words[i];
      let mandatoryFound = false;
      let allLettersExistInPuzzle = true;

      for (let j = 0; j < currentWord.length; j++) {
        let letter = currentWord[j];
        if (letter === mandatoryLetter) {
          mandatoryFound = true;
        } else if (restOfLettersInPuzzle.indexOf(letter) === -1) {
          allLettersExistInPuzzle = false;
          break;
        }
      }

      if (mandatoryFound && allLettersExistInPuzzle) {
        validWords++;
      }
    }

    answers.push(validWords);
    puzzles.shift();
  }

  return answers;
};

function minimumCharactersForWords(words) {
  let totalWords = {};
  let results = [];

  for (let i = 0; i < words.length; i++) {
    let currentWord = {};
    for (let j = 0; j < words[i].length; j++) {
      let letter = words[i][j];
      if (currentWord[letter]) {
        currentWord[letter]++;
      } else {
        currentWord[letter] = 1;
      }
    }

    for (let key in currentWord) {
      let letterCount = currentWord[key];
      if (totalWords[key]) {
        if (letterCount > totalWords[key]) {
          totalWords[key] = letterCount;
        }
      } else {
        totalWords[key] = letterCount;
      }
    }
  }

  for (let letter in totalWords) {
    for (let i = 1; i <= totalWords[letter]; i++) {
      results.push(letter);
    }
  }

  return results;
}

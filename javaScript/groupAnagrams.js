function groupAnagrams(words) {
  let results = [];

  let dictionary = {};

  //iterate words and add info to dictionary
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i]; //"yo"
    dictionary[currentWord] = {};
    for (let i = 0; i < currentWord.length; i++) {
      if (!dictionary[currentWord][currentWord[i]]) {
        dictionary[currentWord][currentWord[i]] = 1;
      } else {
        dictionary[currentWord][currentWord[i]]++;
      }
    }
  }

  //while loop words > 0
  while (words.length > 0) {
    let anagrams = [];

    anagrams.push(words[0]);

    for (let i = 1; i < words.length; i++) {
      let originWord = words[0];
      let comparisonWord = words[i];
      let sameWord = true;

      for (let letter in dictionary[originWord]) {
        if (
          dictionary[originWord][letter] !== dictionary[comparisonWord][letter]
        ) {
          sameWord = false;
        }
      }

      if (sameWord) {
        anagrams.push(comparisonWord);
        let index = words.indexOf(comparisonWord);
        words.splice(index, 1);
      }
    }

    words.shift();
    results.push(anagrams);
  }

  //return results
  return results;
}

function LongestWord(sen) {
  let currentlongest = "";
  let longest = 0;

  let words = sen.split(" ");
  words.forEach((word) => {
    let newWord = validateWord(word);
    if (newWord.length > longest) {
      currentlongest = newWord;
      longest = newWord.length;
    }
  });

  return currentlongest;
}

function validateWord(word) {
  let valid = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (valid.includes(char)) {
      result += char;
    }
  }

  return result;
}

function reverseWordsInString(string) {
  let words = [];
  let currentWord = "";
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char !== " ") {
      currentWord += char;
    } else {
      words.unshift(currentWord);
      currentWord = "";
      words.unshift(" ");
    }
  }
  words.unshift(currentWord);
  return words.join("");
}

function generateDocument(characters, document) {
  // Write your code here.
  let charMap = {};
  let docMap = {};

  for (let i = 0; i < characters.length; i++) {
    let character = characters[i];
    if (!charMap[character]) {
      charMap[character] = 1;
    } else {
      charMap[character]++;
    }
  }

  for (let j = 0; j < document.length; j++) {
    let character = document[j];
    if (!docMap[character]) {
      docMap[character] = 1;
    } else {
      docMap[character]++;
    }
  }

  let available = true;

  for (let key in docMap) {
    if (charMap[key] < docMap[key] || !charMap[key]) {
      available = false;
      break;
    }
  }

  return available;
}

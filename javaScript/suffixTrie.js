class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      let currentDirectory = this.root;

      if (!this.root[char]) {
        this.root[char] = {};
      }
      currentDirectory = this.root[char];

      if (i === string.length - 1) {
        currentDirectory[this.endSymbol] = true;
      }

      for (let j = i + 1; j < string.length; j++) {
        let nextChar = string[j];
        if (!currentDirectory[nextChar]) {
          currentDirectory[nextChar] = {};
        }
        currentDirectory = currentDirectory[nextChar];

        if (j === string.length - 1) {
          currentDirectory[this.endSymbol] = true;
        }
      }
    }
  }

  contains(string) {
    let letters = string.split("");
    let currentDirectory = this.root;
    let exists = true;

    while (letters.length > 0) {
      const letter = letters.shift();
      if (!currentDirectory[letter]) {
        exists = false;
        break;
      } else {
        currentDirectory = currentDirectory[letter];
      }

      if (letters.length === 0) {
        if (!currentDirectory[this.endSymbol]) {
          exists = false;
        }
      }
    }
    return exists;
  }
}

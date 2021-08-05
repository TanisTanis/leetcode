function firstNonRepeatingCharacter(string) {
  let map = {};

  for (let i = 0; i < string.length; i++) {
    if (map[string[i]]) {
      map[string[i]]++;
    } else {
      map[string[i]] = 1;
    }
  }
  for (let j = 0; j < string.length; j++) {
    if (map[string[j]] === 1) {
      return j;
    }
  }

  return -1;
}

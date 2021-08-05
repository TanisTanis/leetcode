function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let string1 = mapMaker(s);
  let string2 = mapMaker(t);

  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      return false;
    }
  }

  return true;
}

function mapMaker(string) {
  let map = {};
  let result = [];
  let count = 1;

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if (map[letter]) {
      result.push(map[letter]);
    } else {
      map[letter] = count;
      result.push(count);
      count++;
    }
  }

  return result;
}

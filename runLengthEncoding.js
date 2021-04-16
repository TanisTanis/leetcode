function runLengthEncoding(string) {
  let previous = undefined;
  let count = 0;
  let result = "";

  //iterate through input string
  for (let i = 0; i < string.length; i++) {
    let currentLetter = string[i];

    if (previous === undefined) {
      previous = currentLetter;
      count++;
      continue;
    }

    if (i === string.length - 1) {
      previous = currentLetter;
      result += stringFormatter(previous, count);
    }

    if (previous === currentLetter) {
      count++;
    } else {
      result += stringFormatter(previous, count);
      previous = currentLetter;
      count = 0;
    }
  }

  return result;
}

function stringFormatter(letter, count) {
  let result = "";

  if (count >= 10) {
    while (count - 9 >= 0) {
      count = count - 9;
      result += `${9}${letter}`;
    }
    if (count > 0) {
      result += `${count}${letter}`;
    }
    return result;
  } else {
    result += `${count}${letter}`;
    return result;
  }
}

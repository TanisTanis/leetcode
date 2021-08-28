function minimumPassesOfMatrix(matrix) {
  let noConversions = false;
  let count = 0;

  while (!noConversions) {
    let copyOfCurrentMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
      copyOfCurrentMatrix.push(matrix[i].slice());
    }
    let conversion = convertMatrix(matrix, copyOfCurrentMatrix);
    if (conversion) {
      count++;
    } else {
      noConversions = true;
    }
  }

  const hasNegative = checkForNegatives(matrix);

  if (hasNegative) {
    return -1;
  } else {
    return count;
  }
}

function convertMatrix(matrix, copy) {
  let changesMade = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let val = copy[i][j];
      if (val > 0) {
        let changes = changeToPositive(matrix, i, j);
        if (changes) {
          changesMade = true;
        }
      }
    }
  }
  return changesMade;
}

function changeToPositive(matrix, x, y) {
  let changeMade = false;

  let up = matrix[x - 1] ? matrix[x - 1][y] : null;
  let down = matrix[x + 1] ? matrix[x + 1][y] : null;
  let right = matrix[x][y + 1] ? matrix[x][y + 1] : null;
  let left = matrix[x][y - 1] ? matrix[x][y - 1] : null;

  if (up && up < 0) {
    matrix[x - 1][y] = up * -1;
    changeMade = true;
  }
  if (down && down < 0) {
    matrix[x + 1][y] = down * -1;
    changeMade = true;
  }
  if (right && right < 0) {
    matrix[x][y + 1] = right * -1;
    changeMade = true;
  }
  if (left && left < 0) {
    matrix[x][y - 1] = left * -1;
    changeMade = true;
  }

  return changeMade;
}

function checkForNegatives(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let minValue = Math.min(...matrix[i]);
    if (minValue < 0) {
      return true;
    }
  }
}

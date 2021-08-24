function riverSizes(matrix) {
  let sizes = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let val = matrix[i][j];

      if (val === 1) {
        sizes.push(riverCheck(i, j, matrix));
      }
    }
  }

  return sizes;
}

function riverCheck(x, y, matrix) {
  let count = 0;

  function checkAdjacent(row, col) {
    count++;
    matrix[row][col] = 2;

    const right =
      matrix[row][col + 1] !== undefined ? matrix[row][col + 1] : null;
    const left =
      matrix[row][col - 1] !== undefined ? matrix[row][col - 1] : null;
    const up = matrix[row - 1] ? matrix[row - 1][col] : null;
    const down = matrix[row + 1] ? matrix[row + 1][col] : null;

    if (count === 22) {
      console.log(right, left, up, down);
    }

    if (right === 1) {
      checkAdjacent(row, col + 1);
    }
    if (left === 1) {
      checkAdjacent(row, col - 1);
    }
    if (up === 1) {
      checkAdjacent(row - 1, col);
    }
    if (down === 1) {
      checkAdjacent(row + 1, col);
    }
  }

  checkAdjacent(x, y);
  return count;
}

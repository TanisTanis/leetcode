function removeIslands(matrix) {
  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[i].length - 1; j++) {
      let val = matrix[i][j];
      if (val === 1) {
        if (isIsland(i, j, matrix)) {
          changeToZeros(i, j, matrix);
        }
      }
    }
  }

  for (let q = 0; q < matrix.length; q++) {
    for (let z = 0; z < matrix[q].length; z++) {
      let val = matrix[q][z];
      if (val === -1) {
        matrix[q][z] = 1;
      }
    }
  }

  return matrix;
}

function isIsland(x, y, matrix) {
  let validIsland = true;

  function checkAdjacent(row, col) {
    matrix[row][col] = -1;

    const right =
      matrix[row][col + 1] !== undefined ? matrix[row][col + 1] : null;
    const left =
      matrix[row][col - 1] !== undefined ? matrix[row][col - 1] : null;
    const up = matrix[row - 1] !== undefined ? matrix[row - 1][col] : null;
    const down = matrix[row + 1] !== undefined ? matrix[row + 1][col] : null;

    if (right === 1 && col + 1 === matrix[row].length - 1) {
      validIsland = false;
    } else if (right === 1) {
      checkAdjacent(row, col + 1);
    }

    if (left === 1 && col - 1 === 0) {
      validIsland = false;
    } else if (left === 1) {
      checkAdjacent(row, col - 1);
    }

    if (up === 1 && row - 1 === 0) {
      validIsland = false;
    } else if (up === 1) {
      checkAdjacent(row - 1, col);
    }

    if (down === 1 && row + 1 === matrix.length - 1) {
      validIsland = false;
    } else if (down === 1) {
      checkAdjacent(row + 1, col);
    }
  }

  checkAdjacent(x, y);
  return validIsland;
}

function changeToZeros(x, y, matrix) {
  function checkAdjacent(row, col) {
    matrix[row][col] = 0;

    const right =
      matrix[row][col + 1] !== undefined ? matrix[row][col + 1] : null;
    const left =
      matrix[row][col - 1] !== undefined ? matrix[row][col - 1] : null;
    const up = matrix[row - 1] !== undefined ? matrix[row - 1][col] : null;
    const down = matrix[row + 1] !== undefined ? matrix[row + 1][col] : null;

    if (right === -1) {
      checkAdjacent(row, col + 1);
    }
    if (left === -1) {
      checkAdjacent(row, col - 1);
    }
    if (up === -1) {
      checkAdjacent(row - 1, col);
    }
    if (down === -1) {
      checkAdjacent(row + 1, col);
    }
  }

  checkAdjacent(x, y);
}

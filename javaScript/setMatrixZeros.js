var setZeroes = function (matrix) {
  let zeros = [];

  for (let q = 0; q < matrix.length; q++) {
    for (let z = 0; z < matrix[q].length; z++) {
      let value = matrix[q][z];
      if (value === 0) {
        zeros.push([q, z]);
      }
    }
  }

  for (let i = 0; i < zeros.length; i++) {
    let x = zeros[i][0];
    let y = zeros[i][1];

    changeToZeros(x, y, "up");
    changeToZeros(x, y, "down");
    changeToZeros(x, y, "left");
    changeToZeros(x, y, "right");
  }

  function changeToZeros(x, y, direction) {
    matrix[x][y] = 0;

    const up = matrix[x - 1] !== undefined ? matrix[x - 1][y] : null;
    const down = matrix[x + 1] !== undefined ? matrix[x + 1][y] : null;
    const left = matrix[x][y - 1] !== undefined ? matrix[x][y - 1] : null;
    const right = matrix[x][y + 1] !== undefined ? matrix[x][y + 1] : null;

    if (direction === "up" && up != null) {
      changeToZeros(x - 1, y, "up");
    } else if (direction === "down" && down !== null) {
      changeToZeros(x + 1, y, "down");
    } else if (direction === "left" && left !== null) {
      changeToZeros(x, y - 1, "left");
    } else if (direction === "right" && right !== null) {
      changeToZeros(x, y + 1, "right");
    }
  }
};

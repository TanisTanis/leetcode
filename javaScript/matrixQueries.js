function matrixQueries(n, m, queries) {
  let matrix = [];

  //matrix construction needs to be done like this in order to avoid duplicate reference values with filling

  for (let i = 1; i <= n; i++) {
    let newArray = [];
    for (let j = 1; j <= m; j++) {
      newArray.push(1);
    }
    matrix.push(newArray);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = (i + 1) * (j + 1);
    }
  }

  let results = [];

  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let type = query[0];
    let param = query[1] || null;

    if (type === 0) {
      let minVal = findMinValue(matrix);
      if (minVal === Infinity) {
        break;
      }
      results.push(minVal);
    } else if (type === 1) {
      deactivateRow(matrix, param - 1);
    } else if (type === 2) {
      deactivateColumn(matrix, param - 1);
    }
  }

  return results;
}

function deactivateColumn(m, col) {
  for (let i = 0; i < m.length; i++) {
    m[i][col] = -1;
  }
}

function deactivateRow(m, row) {
  const length = m[row].length;

  for (let i = 0; i < length; i++) {
    m[row][i] = -1;
  }
}

function findMinValue(m) {
  let min = Infinity;

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      const val = m[i][j];
      if (val === -1) {
        continue;
      }
      if (val < min) {
        min = val;
      }
    }
  }

  return min;
}

console.log(matrixQueries(6, 1, [[1, 1], [1, 4], [0], [1, 5], [1, 2], [0]]));

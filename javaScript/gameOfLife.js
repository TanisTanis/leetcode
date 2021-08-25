var gameOfLife = function (board) {
  const copyOfBoard = [];

  for (let j = 0; j < board.length; j++) {
    copyOfBoard.push(board[j].slice());
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let newVal = calculateLiveOrDead(i, j, copyOfBoard);
      board[i][j] = newVal;
    }
  }

  return board;
};

function calculateLiveOrDead(x, y, copyBoard) {
  const val = copyBoard[x][y];

  const right = copyBoard[x][y + 1] !== undefined ? copyBoard[x][y + 1] : null;
  const left = copyBoard[x][y - 1] !== undefined ? copyBoard[x][y - 1] : null;
  const up = copyBoard[x - 1] !== undefined ? copyBoard[x - 1][y] : null;
  const down = copyBoard[x + 1] !== undefined ? copyBoard[x + 1][y] : null;

  const topRight =
    copyBoard[x - 1] !== undefined && copyBoard[x - 1][y + 1] !== undefined
      ? copyBoard[x - 1][y + 1]
      : null;
  const topLeft =
    copyBoard[x - 1] !== undefined && copyBoard[x - 1][y - 1] !== undefined
      ? copyBoard[x - 1][y - 1]
      : null;
  const bottomRight =
    copyBoard[x + 1] !== undefined && copyBoard[x + 1][y + 1] !== undefined
      ? copyBoard[x + 1][y + 1]
      : null;
  const bottomLeft =
    copyBoard[x + 1] !== undefined && copyBoard[x + 1][y - 1] !== undefined
      ? copyBoard[x + 1][y - 1]
      : null;

  let zeros = 0;
  let ones = 0;

  const neighbors = [
    right,
    left,
    up,
    down,
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
  ];

  neighbors.forEach((val) => {
    if (val === 1) {
      ones++;
    } else if (val === 0) {
      zeros++;
    }
  });

  if (val === 1) {
    if (ones < 2) {
      return 0;
    } else if (ones >= 2 && ones <= 3) {
      return 1;
    } else if (ones > 3) {
      return 0;
    }
  } else if (val === 0) {
    if (ones === 3) {
      return 1;
    } else {
      return 0;
    }
  }
}

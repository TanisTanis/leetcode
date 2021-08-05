/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
  //iterate through matrix
  for (let i = 0; i < board.length; i++) {

      for (let j = 0; j < board[i].length; j++) {

          let current = board[i][j];

          if (current === 'O') {

              if (surroundedChecker(board, i, j)) {

                  board = flipper(board, i, j);
                  console.log(board);
              }

          }

      }

  }
  console.log(board);

};

var surroundedChecker = function(board, matrixIndex, arrayIndex) {

  let surrounded = true;

  function recurse(board, i, j) {
      //check above, below, left, and right values
      board[i][j] = 'C';

      if (board[i - 1][j] === undefined || board[i + 1][j] === undefined || board[i][j - 1] === undefined || board[i][j + 1] === undefined) {
          surrounded = false;
          return;
      }

      if (board[i - 1][j] === 'O') {
          recurse(board, i - 1, j)
      }
      if (board[i + 1][j] === 'O') {
          recurse(board, i + 1, j)
      }
      if (board[i][j - 1] === 'O') {
          recurse(board, i, j - 1)
      }
      if (board[i][j + 1]) {
          recurse(board, i, j + 1)
      }
  }

  return surrounded;
}

function flipper(board, i, j) {
  board[i][j] = 'X';

  if (board[i - 1][j] === 'O') {
      flipper(board, i - 1, j)
  }
   if (board[i + 1][j] === 'O') {
      flipper(board, i + 1, j)
  }
   if (board[i][j + 1] === 'O') {
      flipper(board, i, j + 1)
  }
   if (board[i][j - 1] === 'O') {
      flipper(board, i, j - 1)
  }

  return board;
}

console.log(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]));
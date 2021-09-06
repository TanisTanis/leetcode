function rotateOverDiagonals(m, k) {
  for (let i = 1; i <= k; i++) {
    const topNums = getTopOfMatrix(m);
    const bottomNums = getBottomOfMatrix(m);
    const rightNums = getRightOfMatrix(m);
    const leftNums = getLeftOfMatrix(m);

    replaceTop(m, leftNums);
    replaceRight(m, topNums);
    replaceBottom(m, rightNums);
    replaceLeft(m, bottomNums);
  }
  return m;
}

function replaceTop(m, nums) {
  let left = 1;
  let right = m[0].length - 2;
  let mid = (m.length - 1) / 2;

  let row = 0;

  for (let i = 0; i < mid; i++) {
    for (let j = left; j <= right; j++) {
      m[i][j] = nums[0];
      nums.shift();
    }
    left++;
    right--;
  }
}

function replaceBottom(m, nums) {
  let left = 1;
  let right = m[0].length - 2;
  let mid = (m.length - 1) / 2;

  let row = m.length - 1;

  for (let i = row; i > mid; i--) {
    for (let j = right; j >= left; j--) {
      m[i][j] = nums[0];
      nums.shift();
    }
    left++;
    right--;
  }
}

function replaceRight(m, nums) {
  let top = 1;
  let bottom = m.length - 2;

  let mid = (m[0].length - 1) / 2;

  let column = m[0].length - 1;

  for (let i = column; i > mid; i--) {
    for (let j = top; j <= bottom; j++) {
      m[j][i] = nums[0];
      nums.shift();
    }
    top++;
    bottom--;
  }
}

function replaceLeft(m, nums) {
  let top = 1;
  let bottom = m.length - 2;

  let mid = (m[0].length - 1) / 2;

  let column = 0;

  for (let i = column; i < mid; i++) {
    for (let j = bottom; j >= top; j--) {
      m[j][i] = nums[0];
      nums.shift();
    }
    top++;
    bottom--;
  }
}

function getTopOfMatrix(m) {
  let left = 1;
  let right = m[0].length - 2;
  let mid = (m.length - 1) / 2;

  let row = 0;
  let nums = [];

  for (let i = 0; i < mid; i++) {
    for (let j = left; j <= right; j++) {
      nums.push(m[i][j]);
    }
    left++;
    right--;
  }

  return nums;
}

function getBottomOfMatrix(m) {
  let left = 1;
  let right = m[0].length - 2;
  let mid = (m.length - 1) / 2;

  let row = m.length - 1;
  let nums = [];

  for (let i = row; i > mid; i--) {
    for (let j = right; j >= left; j--) {
      nums.push(m[i][j]);
    }
    left++;
    right--;
  }

  return nums;
}

function getRightOfMatrix(m) {
  let top = 1;
  let bottom = m.length - 2;

  let mid = (m[0].length - 1) / 2;

  let column = m[0].length - 1;
  let nums = [];

  for (let i = column; i > mid; i--) {
    for (let j = top; j <= bottom; j++) {
      nums.push(m[j][i]);
    }
    top++;
    bottom--;
  }
  return nums;
}

function getLeftOfMatrix(m) {
  let top = 1;
  let bottom = m.length - 2;

  let mid = (m[0].length - 1) / 2;

  let column = 0;
  let nums = [];

  for (let i = column; i < mid; i++) {
    for (let j = bottom; j >= top; j--) {
      nums.push(m[j][i]);
    }
    top++;
    bottom--;
  }

  return nums;
}

console.log(
  rotateOverDiagonals(
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ],
    1
  )
);

function findThreeLargestNumbers(array) {
  //if array is not 3 long, return array

  let result = [-Infinity, -Infinity, -Infinity];

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= result[2]) {
      result.push(array[i]);
      result.shift();
      continue;
    }
    if (array[i] <= result[2] && array[i] > result[1]) {
      result[0] = result[1];
      result[1] = array[i];
      continue;
    }
    if (array[i] <= result[1] && array[i] > result[0]) {
      result[0] = array[i];
      continue;
    }
  }
  return result;
}

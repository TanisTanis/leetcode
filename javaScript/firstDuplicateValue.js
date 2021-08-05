function firstDuplicateValue(array) {
  //dictionary
  let obj = {};

  //iterate through array
  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    if (obj[currentNumber]) {
      return currentNumber;
    } else {
      obj[currentNumber] = true;
    }
  }

  // this is in O(n) time, iterate through entire array in worst case
  return -1;
}

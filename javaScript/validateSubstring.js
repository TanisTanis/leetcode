function isValidSubsequence(array, sequence) {
  //iterate backwords through array
  for (let i = array.length - 1; i >= 0; i--) {
    //if array[i] === last index of sequence
    if (array[i] === sequence[sequence.length - 1]) {
      //pop out last index of sequence
      sequence.pop();
    }
  }

  //if sequence.length === 0
  if (sequence.length === 0) {
    return true;
  } else {
    return false;
  }
}

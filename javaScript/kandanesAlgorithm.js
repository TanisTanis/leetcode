function kadanesAlgorithm(array) {
  // max variable
  let max = -Infinity;

  //iterate through array
  for (let i = 0; i < array.length; i++) {
    let currentMax = 0;
    for (let j = i; j < array.length; j++) {
      currentMax += array[j];

      if (currentMax > max) {
        max = currentMax;
      }
    }
  }

  //return max
  return max;
}

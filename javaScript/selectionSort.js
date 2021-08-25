function selectionSort(array) {
  let sorted = false;
  let startIndex = 0;

  while (!sorted) {
    let smallestNum = array[startIndex];
    let swapIndex = startIndex;

    for (let i = startIndex; i < array.length; i++) {
      let val = array[i];
      if (val < smallestNum) {
        smallestNum = val;
        swapIndex = i;
      }
    }

    let temp = array[swapIndex];
    array[swapIndex] = array[startIndex];
    array[startIndex] = temp;
    startIndex++;

    if (startIndex >= array.length) {
      sorted = true;
    }
  }

  return array;
}

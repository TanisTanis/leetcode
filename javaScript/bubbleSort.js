function bubbleSort(array) {
  let noSwaps = false;

  while (!noSwaps) {
    let swap = false;

    for (let i = 0; i < array.length - 1; i++) {
      let cur = array[i];
      let next = array[i + 1];

      if (next < cur) {
        let temp = array[i];
        array[i] = next;
        array[i + 1] = temp;
        swap = true;
      }
    }

    if (swap === false) {
      noSwaps = true;
    }
  }

  return array;
}

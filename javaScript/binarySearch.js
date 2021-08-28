function binarySearch(array, target) {
  return binarySearchHelp(array, target, 0, array.length - 1);
}

function binarySearchHelp(array, target, left, right) {
  if (left > right) return -1;
  const middle = Math.ceil((left + right) / 2);
  const val = array[middle];
  if (val === target) {
    return middle;
  } else if (val > target) {
    return binarySearchHelp(array, target, left, middle - 1);
  } else if (val < target) {
    return binarySearchHelp(array, target, middle + 1, right);
  }
}

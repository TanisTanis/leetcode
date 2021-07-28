function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let results = [];

  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let sum = array[i] + array[left] + array[right];
      if (sum === targetSum) {
        results.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (sum < targetSum) {
        left++;
      } else if (sum > targetSum) {
        right--;
      }
    }
  }

  return results;
}

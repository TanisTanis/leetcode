function nextGreaterElement(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(circularLoop(array, i));
  }

  return newArray;
}

function circularLoop(originalArray, index) {
  let higherNum = -1;
  let count = 0;
  let currentIndex = index;

  while (count < originalArray.length) {
    let currentNum = originalArray[currentIndex];
    if (currentNum > originalArray[index]) {
      higherNum = currentNum;
      break;
    } else {
      count++;
      currentIndex++;
      if (currentIndex === originalArray.length) {
        currentIndex = 0;
      }
    }
  }

  return higherNum;
}

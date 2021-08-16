function hasSingleCycle(array) {
  let index = 0;
  let copy = new Array(array.length).fill(1);

  //iterate from 0 to array.length
  for (let i = 0; i < array.length; i++) {
    //get val from currentIndex
    let val = array[index];
    //change copy at currentIndex to 0
    copy[index] = 0;
    //update currentIndex, include wrapping
    index = indexCalc(index + val, array.length);
  }

  //check that currentindex is 0
  const returned = index === 0;
  //check that copy is all 0's
  const allVisited = copy.indexOf(1) === -1;

  return returned && allVisited;
}

function indexCalc(index, arrayLength) {
  const nextIndex = index % arrayLength;
  return nextIndex >= 0 ? nextIndex : nextIndex + arrayLength;
}

function smallestDifference(arrayOne, arrayTwo) {
  //difference
  let difference = Infinity;
  let arrayOneNum;
  let arrayTwoNum;

  //iterate through arrayOne
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      let currentDifference = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (currentDifference < difference) {
        difference = currentDifference;
        arrayOneNum = arrayOne[i];
        arrayTwoNum = arrayTwo[j];
      }
    }
  }

  //return output is array of numbers
  return [arrayOneNum, arrayTwoNum];

  //this is in O(n^2) time, could be better
}

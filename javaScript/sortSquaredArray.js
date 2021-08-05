function sortedSquaredArray(array) {
  //results array
  let results = [];

  //iterate through input array
  for (let i = 0; i < array.length; i++) {
    //square number and push to results array
    results.push(array[i] ** 2);
  }

  //sort results array and return
  results = results.sort(lowestToHighest);
  return results;
}

function lowestToHighest(a, b) {
  return a - b;
}

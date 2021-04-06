function powerset(array) {
  //input is an array

  //subsets array, start with an empty bracket
  let subsets = [[]];

  //iterate through input array
  for (let i = 0; i < array.length; i++) {
    //let currentlength = subsets.length
    let currentLength = subsets.length;
    //for each number, iterate through subsets array
    for (let j = 0; j < currentLength; j++) {
      //append array[i] to each subset and push in
      let currentSubset = subsets[j];
      subsets.push(currentSubset.concat(array[i]));
    }
  }

  return subsets;
  //output is another array, but of subsets
}

function twoNumberSum(array, targetSum) {
  //result array
	let results = [];

	//iterate through main array
	for (let i = 0; i < array.length; i++) {

	  //for each number in array, run a second loop through, ignoring our current index
		for (let j = 0; j < array.length; j++) {
	    //if i === j, continue;
			if (i === j) {
				continue;
			}
			//if array[i] + array[j] === target
			if (array[i] + array[j] === targetSum) {
	      //make sure these numbers are not in result array already
				if (results.indexOf(array[i]) === -1 && results.indexOf(array[j]) === -1) {
	        //then push the numbers in
					results.push(array[i]);
					results.push(array[j]);
				}
			}
		}


	}

	//return result array
	return results;
}

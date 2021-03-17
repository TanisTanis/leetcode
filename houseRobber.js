// var rob = function(nums) {

//   //even total
//   let evenTotal = 0;
//   //odd total
//   let oddTotal = 0;

//   //iterate through nums by evens
//   for (let i = 0; i < nums.length; i += 2) {
//     //add to even total
//     evenTotal += nums[i];
//   }

//   //iterate through nums by odd
//   for (let j = 1; j < nums.length; j += 2) {
//     //add to odd total
//     oddTotal += nums[j];
//   }

//   //return whichever is larger
//   if (evenTotal > oddTotal) {
//     return evenTotal;
//   }
//   if (oddTotal > evenTotal) {
//     return oddTotal;
//   }
//   return evenTotal;
// }

var rob = function(nums) {

  let firstTotal = 0;
  let secondTotal = 0;

  //iterate through nums array by 2
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] > nums[i + 1]) {
      firstTotal += nums[i];
    }
    if (nums[i] < nums[i + 1]) {
      firstTotal += nums[i + 1];
      i++;
    }
  }

  for (let j = 1; j < nums.length; j += 2) {
    if (nums[j] > nums[j + 1]) {
      secondTotal += nums[j];
    }
    if (nums[j] < nums[j + 1]) {
      secondTotal += nums[j + 1];
      j++;
    }
  }

  if (firstTotal > secondTotal) {
    return firstTotal;
  } else {
    return secondTotal;
  }
}

console.log(rob([2,1,1,2]));